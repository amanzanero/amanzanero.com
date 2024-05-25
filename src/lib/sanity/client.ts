import { createClient } from "@sanity/client";

const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-25";

export const sanityCmsClient = createClient({
  projectId, // you can find this in sanity.json
  dataset, // or the name you chose in step 1
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
});

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
