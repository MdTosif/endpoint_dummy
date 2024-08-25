"use client";
import Card from "@/lib/card";
import InputField from "@/lib/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EndpointSchema = z.object({
  endpointName: z.string(),
  requestMethod: z.string(),
});

type EndpointType = z.infer<typeof EndpointSchema>;

export default function AddForm() {
  const { register, handleSubmit } = useForm<EndpointType>({
    resolver: zodResolver(EndpointSchema),
  });
  // Define the submit handler
  const onSubmit = async (data: EndpointType) => {
    console.log(data);
  };

  return (
    <Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          name="Endpoint Methods"
          register={register("requestMethod", {
            required: "Please enter your first name.",
          })} // custom message
        />
        <InputField
          name={"Endpoint Name"}
          register={register("endpointName", {
            required: "Please enter your first name.",
          })}
        />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </form>
    </Card>
  );
}
