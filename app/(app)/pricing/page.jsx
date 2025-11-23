"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import PricingTable from "../../../components/pricing/pricing-table";
import { IntlProvider } from "react-intl";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [pricingData, setPricingData] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setPricingData(false);
    axios
      .get(`/api/pricing?voucher=${searchParams.get("voucher") ?? null}`)
      .then((response) => {
        if (response?.data) {
          setPricingData(response?.data);
        }
      })
      .catch((e) => {});
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Header />
      <IntlProvider
        messages={require("../../../lib/lang/hu.json")}
        locale={"hu"}
      >
        {pricingData && (
          <PricingTable
            providers={pricingData.providers}
            pricing={pricingData.pricing}
            discount={pricingData.discount}
            currency={pricingData.currency}
            voucher={pricingData.voucher}
          />
        )}
      </IntlProvider>
      <Footer />
    </div>
  );
}
