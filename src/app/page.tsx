"use server"

import { knexInstance } from "@/database/knex-instance";
import { EndpointDataDbRow } from "@/models/endpoint.model";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {JSON.stringify(await knexInstance<EndpointDataDbRow>('endpoint_data').select('*'), undefined, 4)}
    </main>
  );
}
