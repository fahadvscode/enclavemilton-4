import type { Metadata } from "next";
import { IMAGES } from "./images";
import { SITE_NAME, SITE_NAME_LONG, SITE_URL } from "./site";

const TITLE_SUFFIX = "The Enclave Milton by Sundial Homes";

type PageMeta = {
  path?: string;
  pageTitle: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
};

export const PRIMARY_KEYWORDS = [
  "The Enclave Milton",
  "The Enclave",
  "The Enclave Milton Townhomes",
  "The Enclave Milton Sundial Homes",
  "Enclave Milton",
  "Enclave Milton townhomes",
  "Sundial Homes Milton",
  "Sundial Homes The Enclave",
  "freehold townhomes Milton",
  "Milton townhomes for sale",
  "Britannia Road Milton new homes",
  "The Enclave Milton from $599,990",
  "new homes Milton Ontario 2027",
] as const;

export function buildMetadata({
  path = "",
  pageTitle,
  description,
  ogImage = IMAGES.hero,
  keywords = [...PRIMARY_KEYWORDS],
}: PageMeta): Metadata {
  const fullTitle = `${pageTitle} | ${TITLE_SUFFIX}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url,
      siteName: SITE_NAME_LONG,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${SITE_NAME} — ${SITE_NAME_LONG}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const defaultDescription =
  "The Enclave Milton by Sundial Homes — freehold townhomes from $599,990 on Britannia Road between James Snow Parkway and Fourth Line. Register now for The Enclave Milton price list, floor plans, and Village & Park collection details. Occupancy 2027.";

export const homePageTitle =
  "The Enclave Milton | Freehold Townhomes from $599,990 — Register Today";
