import { NextResponse } from "next/server";
import { REGISTRATION_FORM_NAME } from "@/lib/registration-form";
import { insertRegistration, isSupabaseConfigured } from "@/lib/supabase/server";
import type { RegistrationPayload } from "@/lib/types";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: RegistrationPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, model, collection, source, formName } = body;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !model?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const lead = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    model: model.trim(),
    collection: collection?.trim() ?? "",
    submittedAt: new Date().toISOString(),
    source: source?.trim() || "theenclavemilton.homes",
    formName: formName?.trim() || REGISTRATION_FORM_NAME,
  };

  if (!isSupabaseConfigured()) {
    console.error(
      "[registration] SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are not set — lead not saved."
    );
    return NextResponse.json(
      {
        error:
          "Registration is temporarily unavailable. Please try again later or contact us directly.",
      },
      { status: 503 }
    );
  }

  const saved = await insertRegistration({
    first_name: lead.firstName,
    last_name: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    model: lead.model,
    collection: lead.collection,
    source: lead.source,
    form_name: lead.formName,
  });

  if (!saved.ok) {
    return NextResponse.json(
      { error: "Could not save your registration. Please try again shortly." },
      { status: 500 }
    );
  }

  const webhookUrl = process.env.REGISTRATION_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      console.error("Webhook delivery failed for lead:", lead.email);
    }
  }

  return NextResponse.json({
    ok: true,
    message:
      "Registration received. Floor plan PDF and details will be sent to your email.",
  });
}
