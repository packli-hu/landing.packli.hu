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

export default function InitialForm({ data, setData, calculateOffer }) {
  const formSchema = z.object({
    count: z.union([
      z.literal("").transform(() => undefined),
      z.coerce.number().min(1, "Minimum 1 db megadása kötelező"),
    ]),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      count: parseInt(data.parcelCount),
    },
  });

  return (
    <>
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Árajánlat egy kattintással
      </h3>
      <p className="mb-8">
        Egyedi ajánlatunk tartalmazza a GLS, az MPL, a DPD, a Packeta és a
        FoxPost árait is. Csak add meg webshopod átlagos havi csomagszámát,
        böngészd át árajánlatunkat, és készítsd el Packli fiókodat néhány perc
        alatt.
      </p>
      <Form {...form} key={"initial-form"}>
        <form
          onSubmit={form.handleSubmit((e) => {
            setData("parcelCount", e.count);
            calculateOffer({
              parcelCount: e.count,
            });
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
          </div>

          <Button size="lg" type="submit" className="w-full cursor-pointer">
            Ajánlatot kérek
          </Button>
        </form>
      </Form>
    </>
  );
}
