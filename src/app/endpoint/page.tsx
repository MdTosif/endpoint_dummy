"use client";
import Card from "@/lib/card";
import InputField from "@/lib/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EndpointSchema = z.object({
  endpointName: z.string().regex(/^\d+$/, "only digits are allowed"),
  requestMethod: z.string(),
});

type EndpointType = z.infer<typeof EndpointSchema>;
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EndpointType>({
    resolver: zodResolver(EndpointSchema),
  });
  // Define the submit handler
  const onSubmit = async (data: EndpointType) => {
    console.log(data);
  };
  return (
    <>
      <Card
        figureUrl="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
        className="h-svh"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="m-auto h-full my-0 p-0 shadow-none ">
            <h1>New album is released!</h1>
            <InputField
              name="Name"
              optional
              error={errors.endpointName?.message}
              register={register("endpointName")}
            />
            <InputField name="DOB" register={register("requestMethod")} />

            <div className="card-actions justify-end">
              <button className="btn btn-primary" type="submit">
                Listen
              </button>
            </div>
          </Card>
        </form>
      </Card>
    </>
  );
}
