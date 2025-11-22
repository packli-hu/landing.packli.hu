import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import InitialForm from "@/components/formStates/InitialForm";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import axios from "axios";

const Offer = () => {
  const { resolvedTheme } = useTheme();

  const [avgWeight, setAvgWeight] = useState(0);
  const [parcelCount, setParcelCount] = useState(0);

  const [formData, setFormData] = useState({
    avgWeight: avgWeight,
    parcelCount: parcelCount,
  });

  const calculateOffer = useCallback(async () => {
    if (formData.parcelCount <= 30) {
      await axios
        .post("/api/acquisition", {
          parcel_count: formData.parcelCount,
          parcel_weight: formData.avgWeight,
        })
        .then((response) => {
          if (response.data?.voucher) {
            window.location.replace(
              "/pricing?voucher=" + response.data.voucher
            );
            return;
          }

          toast.success("Ajánlatodat hamarosan megkapod....");
        })
        .catch((e) => {
          console.log("e", e);
          toast.error("Valami hiba történt!");
        });
    }
  }, [formData]);

  const setData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section
      id="offer"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-border/50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 flex justify-center aligne-center"
          >
            <div>
              <img
                alt="Kezeld webshopod csomagszállítását egyetlen felületen."
                src={
                  resolvedTheme != "dark"
                    ? "/screens/dashboard.jpg"
                    : "/screens/dashboard_dark.jpg"
                }
                className="w-full rounded-sm shadow-2xl border border-border"
              />
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
              <CardContent className="p-8 py-4">
                <InitialForm
                  data={formData}
                  setData={setData}
                  calculateOffer={calculateOffer}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
