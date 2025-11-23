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

export default function AcquisitionForm({ data, setData, calculateOffer }) {
  const formSchema = z.object({
    family_name: z.string().min(3).max(30),
    first_name: z.string().min(3).max(30),
    email: z.string().min(4),
    phone: z.string().min(10),
    webshop: z.string().min(3).max(50),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  return (
    <>
      <p>
        Kérlek, add meg az alábbi adatokat, hogy felkereshessünk az
        ajánlatunkkal.
      </p>
      <p className="mb-8">
        Szeretnénk a lehető legjobban üzletedre szabni kedvezményeinket és
        szolgáltatásainkat. Ezért munkatársunk 2 munkanapon belül felveszi veled
        a kapcsolatot személyesen is.
      </p>
      <Form {...form} key={"details-form"}>
        <form
          onSubmit={form.handleSubmit((e) => {
            calculateOffer(e);
          })}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="family_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vezetéknév</FormLabel>
                  <FormControl>
                    <Input placeholder="Vezetéknév" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keresztnév</FormLabel>
                  <FormControl>
                    <Input placeholder="Keresztnév" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefonszám</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefonszám" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-5">
            <FormField
              control={form.control}
              name="webshop"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Webáruház</FormLabel>
                  <FormControl>
                    <Input placeholder="Webáruház" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            size="lg"
            type="submit"
            className="w-full cursor-pointer mb-5"
          >
            Elküldöm
          </Button>

          <small className="text-gray-400">
            A megadott elérhetőségeken kizárólag a személyreszabott
            ajánlatunkkal kapcsolatban fogunk keresni. Azokat harmadik félnek
            nem adjuk ki, és semmilyen más marketing célra nem használjuk fel.
          </small>
        </form>
      </Form>
    </>
  );
}
