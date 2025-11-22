import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

export default function InitialForm({ data, setData, calculateOffer }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    weight: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number()
        .max(31.5, "Maximum 31.5 kg")
        .min(1, "Minimum 1 kg megadása kötelező"),
    ]),
    count: z.union([
      z.literal("").transform(() => undefined),
      z.coerce.number().min(1, "Minimum 1 db megadása kötelező"),
    ]),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: parseInt(data.avgWeight),
      count: parseInt(data.parcelCount),
    },
  });

  return (
    <>
      <p className="mb-8">
        Egyedi ajánlatunk tartalmazza a GLS, az MPL, a DPD, a Packeta és a
        FoxPost árait is. Csak add meg webshopod átlagos havi csomagszámát,
        böngészd át árajánlatunkat, és készítsd el Packli fiókodat néhány perc
        alatt.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((e) => {
            setData("avgWeight", e.weight);
            setData("parcelCount", e.count);
            calculateOffer();
          })}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-5">
            <FormField
              control={form.control}
              name="count"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Havi csomagszám (db):</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Havi csomagszám"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Csomagok jellemző súlya (kg):</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Csomagok jellemző súlya"
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="text-gray-400">
                    max. 31,5 kg és 300 cm övméret
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button size="lg" type="submit" className="w-full cursor-pointer">
            Ajánlatot kérek
          </Button>
        </form>
      </Form>
    </>
  );
}
