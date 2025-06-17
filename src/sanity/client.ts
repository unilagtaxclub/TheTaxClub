import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "51ce4cep",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
