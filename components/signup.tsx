import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
import * as z from "zod";
import { toast } from "sonner";
import { CustomSubtitle } from "@/components/custom/subtitle";
import { CustomTitle } from "@/components/custom/title";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, "A névnek legalább 2 karaktert kell tartalmaznia"),
  email: z.string().email("Valós emailcím megadása kötelező"),
});

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);

    await axios.post("https://formsubmit.co/it@packli.hu", form.getValues());

    toast("Sikeresen feliratkoztál hamarosan értesítünk!");

    //form.reset();
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-border/50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-25"
        >
          <CustomTitle>Lépj be elsőként a Packli világába</CustomTitle>

          <CustomSubtitle>
            Iratkozz fel a korai hozzáférésért és elsőként próbálhatod ki a
            Packli új funkcióit. Értesítést és meghívót küldünk, amint
            elérhetővé válik a platform.
          </CustomSubtitle>

          {/* Contact Form */}
          <Card className="border-border/50 w-full max-w-[50%]">
            <CardContent className="p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Név</FormLabel>
                        <FormControl>
                          <Input placeholder="Név" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="email@packli.hu"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <small data-slot="form-message">
                          Ha Fuvar.hu felhasználó vagy, az ott megadott email
                          címet add meg.
                        </small>
                      </FormItem>
                    )}
                  />

                  <Button
                    size="lg"
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Feliratkozás..." : "Feliratkozás"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SignUp;
