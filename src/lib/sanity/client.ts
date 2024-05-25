import { env } from "@/env";
import { createClient } from "@sanity/client";

export const sanityCmsClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false, // `false` if you want to ensure fresh data
});
