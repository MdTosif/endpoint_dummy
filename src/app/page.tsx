"use server";

import { knexInstance } from "@/database/knex-instance";
import { EndpointDataDbRow } from "@/models/endpoint.model";

export default async function Home() {
  return (
    <main>
      {/* {JSON.stringify(
        await knexInstance<EndpointDataDbRow>("endpoint_data").select("*"),
        undefined,
        4,
      )}
      <button className="btn btn-success">Success</button> */}

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </main>
  );
}
