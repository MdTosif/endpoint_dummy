import { DB_TABLES } from "@/models";
import { EndpointDataDbRow } from "@/models/endpoint.model";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex<EndpointDataDbRow>(DB_TABLES.endpointData).insert([
        {endpoint_name:"endpint 1",request_body:{lol:"lol"}},
        {endpoint_name:"endpint 2",request_body:{lol:"lol"}},
        {endpoint_name:"endpint 3",request_body:{lol:"lol"}},
        {endpoint_name:"endpint 4",request_body:{lol:"lol"}},
        {endpoint_name:"endpint 5",request_body:{lol:"lol"}},
        {endpoint_name:"endpint 6",request_body:{lol:"lol"}},
    ])
}