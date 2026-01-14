import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import InitialForm from "@/components/acquisition/InitialForm";
import AcquisitionForm from "@/components/acquisition/AcquisitionForm";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import axios from "axios";
import confetti from "canvas-confetti";

const Offer = () => {
  const { resolvedTheme } = useTheme();

  const [acquisitionState, setAcquisitionState] = useState("initial");

  const [formData, setFormData] = useState({
    parcelCount: 0,
  });

  const calculateOffer = (data) => {
    if (data.parcelCount <= 30) {
      axios
        .post("/api/acquisition", {
          parcel_count: data.parcelCount,
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
    } else {
      if (acquisitionState != "details") {
        setAcquisitionState("details");
        return;
      }

      axios
        .post("/api/acquisition", {
          parcel_count: formData.parcelCount,
          ...data,
        })
        .then((response) => {
          toast.success("Ajánlatoddal hamarosan megkeresünk! Köszönjük!");
          confetti();
        })
        .catch((e) => {
          console.log("e", e);
          toast.error("Valami hiba történt!");
        });
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
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
            className="h-full"
          >
            <Card className="border-border/50 h-full">
              <CardContent
                className="p-8 py-4 h-full flex flex-col justify-center"
                key={acquisitionState + "-state"}
              >
                {acquisitionState == "details" ? (
                  <AcquisitionForm
                    data={formData}
                    setData={setData}
                    calculateOffer={calculateOffer}
                  />
                ) : (
                  <InitialForm
                    data={formData}
                    setData={setData}
                    calculateOffer={calculateOffer}
                  />
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
