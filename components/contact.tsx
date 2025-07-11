import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { CustomBadge } from "@/components/custom/badge";
import { CustomSubtitle } from "@/components/custom/subtitle";
import { CustomTitle } from "@/components/custom/title";
import Link from "next/link";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, "A névnek legalább 2 karaktert kell tartalmaznia"),
  email: z.string().email("Valós emailcím megadása kötelező"),
  subject: z
    .string()
    .min(5, "A tárgynak legalább 5 karaktert kell tartalmaznia"),
  message: z
    .string()
    .min(10, "Az üzenetnek legalább 10 karaktert kell tartalmaznia"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);

    await axios.post("https://formsubmit.co/it@packli.hu", form.getValues());

    toast("Köszönjük az üzeneted. Hamarosan válaszolunk.");

    //form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@packli.hu",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Business St, Suite 100\nSan Francisco, CA 94102",
    },
  ];

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
          <CustomBadge>Figyelünk rád</CustomBadge>

          <CustomTitle>Lépjünk kapcsolatba</CustomTitle>

          <CustomSubtitle>
            Kérdésed van szolgáltatásainkkal kapcsolatban vagy csak mielőbb
            belevágnál? Írj nekünk és felvesszük veled a kapcsolatot.
          </CustomSubtitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Fordulj hozzánk bizalommal
              </h3>
              <p className="text-muted-foreground mb-8">
                Munkatársaink örömmel állnak rendelkezésedre.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <info.icon className="size-4 text-muted-foreground mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.icon === Mail ? (
                      <Link
                        href={`mailto:${info.content}`}
                        className="text-muted-foreground hover:text-purple-500 whitespace-pre-line"
                      >
                        {info.content}
                      </Link>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tárgy</FormLabel>
                          <FormControl>
                            <Input placeholder="Vágjunk bele!" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Üzenet</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Örülünk, ha megosztod velünk, mit vársz a legjobban a Packli szolgáltatásaiból."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      size="lg"
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Küldés..." : "Küldés"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
