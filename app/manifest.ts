import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} Townhomes`,
    short_name: "The Enclave",
    description:
      "The Enclave Milton Townhomes by Sundial Homes — freehold from $599,990.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f7f4",
    theme_color: "#1e3d2c",
    lang: "en-CA",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    id: SITE_URL,
  };
}
