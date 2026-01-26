import clsx from "clsx";
import { useState } from "react";
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Link from "next/link";

export default function PricingTable({
  providers,
  pricing,
  discount,
  currency,
  voucher,
}) {
  const [selectedProvider, setSelectedProvider] = useState(providers[0].slug);

  const SERVICE_ICONS = {
    is_fragile: "milk",
    is_amorf: "abstract-25",
    is_priority: "flash-circle",

    homedelivery: "home",
    return: "arrow-circle-left",
    export: "icon",
    parcellocker: "lots-shopping",
    partner: "shop",
    postoffice: "directbox-default",
    replacement: "arrows-loop",
    partnerandlocker: "lots-shopping",
  };

  const { formatMessage, formatNumber } = useIntl();

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="space-y-5">
          {voucher && (
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/15 dark:to-indigo-900/15 p-6 border border-border/50 shadow-sm">
              <CardContent className="text-center">
                A személyre szabott, kedvezményes ajánlatunk elfdogadásához a
                regisztráció során használd az alábbi kupont
                <br />
                <div
                  className="p-2.5 border border-dashed mt-5 inline-block cursor-pointer"
                  onClick={() => {
                    toast.success("Vágólapra másolva!");
                  }}
                >
                  <span className="flex">
                    <Copy className="mr-2.5" />
                    {voucher?.code ?? "N/A"}
                  </span>
                </div>
                <br />
                <Button className="mt-5">
                  <Link href={"https://app.packli.hu/register"} target="_blank">
                    Regisztrálok
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-2.5">
            {providers.map((provider, index) => (
              <Card
                className="cursor-pointer"
                style={
                  selectedProvider == provider.slug
                    ? {
                        borderColor: "#3C38C4",
                      }
                    : {}
                }
                onClick={(e) => {
                  setSelectedProvider(provider.slug);
                }}
              >
                <CardContent>
                  <div className="flex grow flex-col place-content-center place-items-center">
                    <div className="flex items-center">
                      <img
                        src={"/providers/" + provider.slug + ".svg"}
                        className={"w-20 sm:w-28 md:w-32 dark:block hidden"}
                        alt=""
                      />
                      <img
                        src={"/providers/" + provider.slug + "_dark.svg"}
                        className={"w-20 sm:w-28 md:w-32 dark:hidden"}
                        alt=""
                      />
                    </div>
                    <span className="mt-2.5 text-md font-medium ">
                      {provider.name}
                    </span>
                    <div className="mt-2.5 flex gap-2.5">
                      {provider.services.map((service) => (
                        <DefaultTooltip
                          title={formatMessage({
                            id: "SERVICE." + service.slug.toUpperCase(),
                          })}
                          key={service.id}
                        >
                          <KeenIcon
                            icon={SERVICE_ICONS[service.slug]}
                            className={clsx("text-gray-600", {})}
                            style="outline"
                          />
                        </DefaultTooltip>
                      ))}
                    </div>
                    <input
                      className="appearance-none"
                      type="radio"
                      name="provider"
                      value={provider.slug}
                      readOnly
                      checked={selectedProvider == provider.slug}
                      onChange={(e) => {
                        e.preventDefault();
                        setSelectedProvider(provider.slug);
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {pricing.internal[selectedProvider] && (
            <>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-5 lg:items-end">
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-xl font-medium leading-none ">
                    <FormattedMessage id={"CONTRACT.INTERNAL.HEADER.TITLE"} />
                  </h1>
                  <div className="flex items-center gap-2 text-sm font-normal ">
                    <FormattedMessage
                      id={"CONTRACT.INTERNAL.HEADER.DESCRIPTION"}
                    />
                  </div>
                </div>
              </div>

              <Card>
                <CardContent>
                  <div className="max-w-full overflow-x-auto">
                    <table className="table w-full min-w-max">
                      <thead>
                        <tr>
                          <th className="!bg-transparent"></th>
                          {Object.keys(
                            pricing.internal[selectedProvider].services,
                          )
                            .filter((k) => !k.includes("plus-"))
                            .map((key, value) => (
                              <th className="table-border-s table-border-t !border-b-0 !p-5 !pt-7.5 text-left">
                                <KeenIcon
                                  icon={
                                    SERVICE_ICONS[key.replace("plus-", "")] ??
                                    null
                                  }
                                  className="text-2xl "
                                  style="outline"
                                />
                                <div className="text-mono mt-2.5 text-md font-medium">
                                  <FormattedMessage
                                    id={
                                      "SERVICE." +
                                      key.replace("plus-", "").toUpperCase()
                                    }
                                  />
                                  {key.includes("plus") && <> (Packli+)</>}
                                </div>
                              </th>
                            ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(
                          pricing.internal[selectedProvider].weights,
                        ).map((value, key) => (
                          <tr key={key} className="even:bg-muted">
                            <td className="table-border-s max-w-[12%] !px-5 !py-3.5">
                              <div className="text-2sm font-medium leading-none ">
                                {pricing.internal[selectedProvider].weights[
                                  key - 1
                                ] ?? 0}{" "}
                                -{" "}
                                {
                                  pricing.internal[selectedProvider].weights[
                                    key
                                  ]
                                }{" "}
                                kg
                              </div>
                            </td>
                            {Object.keys(
                              pricing.internal[selectedProvider].services,
                            )
                              .filter((k) => !k.includes("plus-"))
                              .map((k, v) => (
                                <td className="table-border-s !px-5 !py-3.5">
                                  {pricing.internal[selectedProvider].services[
                                    k
                                  ][value] ? (
                                    <>
                                      <FormattedNumber
                                        value={Math.ceil(
                                          pricing.internal[selectedProvider]
                                            .services[k][value] *
                                            (1 - discount / 100),
                                        )}
                                      />{" "}
                                      {currency.symbol}
                                    </>
                                  ) : (
                                    "---"
                                  )}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {pricing.internal[selectedProvider].extra_services &&
                Object.keys(pricing.internal[selectedProvider].extra_services)
                  .length && (
                  <>
                    <div className="mt-10 flex flex-wrap items-center justify-between gap-5 lg:items-end">
                      <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-xl font-medium leading-none ">
                          <FormattedMessage
                            id={"CONTRACT.EXTRA_SERVICES.HEADER.TITLE"}
                          />
                        </h1>
                      </div>
                    </div>
                    <Card className="border-border/50">
                      <CardContent className="p-8 py-4">
                        <ul>
                          {Object.keys(
                            pricing.internal[selectedProvider].extra_services,
                          ).map((service) => (
                            <li className="mb-5">
                              <h3 className="font-medium ">
                                <FormattedMessage
                                  id={
                                    "CONTRACT.EXTRA_SERVICES.SERVICE." +
                                    service.toUpperCase() +
                                    ".TITLE"
                                  }
                                />
                                {": "}
                                {pricing.internal[selectedProvider]
                                  .extra_services[service][0] == "percent"
                                  ? pricing.internal[selectedProvider]
                                      .extra_services[service][1]
                                  : Math.ceil(
                                      pricing.internal[selectedProvider]
                                        .extra_services[service][1] *
                                        (1 - discount / 100),
                                    )}
                                {pricing.internal[selectedProvider]
                                  .extra_services[service][0] == "percent"
                                  ? "%"
                                  : " " + currency.symbol}
                              </h3>
                              <p className="text-sm ">
                                <FormattedMessage
                                  id={
                                    "CONTRACT.EXTRA_SERVICES.SERVICE." +
                                    service.toUpperCase() +
                                    ".DESCRIPTION"
                                  }
                                />
                              </p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                )}
            </>
          )}

          {pricing.external[selectedProvider] && (
            <>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-5 lg:items-end">
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-xl font-medium leading-none ">
                    <FormattedMessage id={"CONTRACT.EXTERNAL.HEADER.TITLE"} />
                  </h1>
                  <div className="flex items-center gap-2 text-sm font-normal ">
                    <FormattedMessage
                      id={"CONTRACT.EXTERNAL.HEADER.DESCRIPTION"}
                    />
                  </div>
                </div>
              </div>

              <Card>
                <CardContent>
                  <div className="max-w-full overflow-x-auto">
                    <table className="table w-full min-w-max">
                      <thead>
                        <tr>
                          <th className="!bg-transparent"></th>
                          {Object.keys(
                            pricing.external[selectedProvider].weights,
                          ).map((value, key) => (
                            <th className="text-mono table-border-s table-border-t mt-2.5 !border-b-0 !p-5 font-bold text-left">
                              {pricing.external[selectedProvider].weights[
                                key - 1
                              ] ?? 0}{" "}
                              -{" "}
                              {pricing.external[selectedProvider].weights[key]}{" "}
                              kg
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(
                          pricing.external[selectedProvider].services,
                        )
                          .sort()
                          .map((key) => (
                            <tr key={key} className="even:bg-muted">
                              <td className="table-border-s !px-5 !py-3.5">
                                <div className="text-right text-2sm font-medium leading-none ">
                                  <FormattedMessage
                                    id={"COUNTRY." + key.toUpperCase()}
                                  />
                                  <img
                                    src={"/flags/" + key + ".svg"}
                                    className="ml-2.5 inline-block size-3.5 rounded-none"
                                  />{" "}
                                </div>
                              </td>
                              {Object.keys(
                                pricing.external[selectedProvider].weights,
                              ).map((k, v) => (
                                <td className="table-border-s !px-5 !py-3.5">
                                  {pricing.external[selectedProvider].services[
                                    key
                                  ]["homedelivery"][k] ? (
                                    <>
                                      <FormattedNumber
                                        value={Math.ceil(
                                          pricing.external[selectedProvider]
                                            .services[key]["homedelivery"][k] *
                                            (1 - discount / 100),
                                        )}
                                      />{" "}
                                      {currency.symbol}
                                    </>
                                  ) : (
                                    "---"
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {pricing.external[selectedProvider].extra_services &&
                Object.keys(pricing.external[selectedProvider].extra_services)
                  .length && (
                  <>
                    <div className="mt-10 flex flex-wrap items-center justify-between gap-5 lg:items-end">
                      <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-xl font-medium leading-none ">
                          <FormattedMessage
                            id={"CONTRACT.EXTRA_SERVICES.HEADER.TITLE"}
                          />
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-normal ">
                          <FormattedMessage
                            id={"CONTRACT.EXTRA_SERVICES.HEADER.DESCRIPTION"}
                          />
                        </div>
                      </div>
                    </div>

                    <Card className="border-border/50">
                      <CardContent className="p-8 py-4">
                        <ul>
                          {Object.keys(
                            pricing.external[selectedProvider].extra_services,
                          ).map((service) => (
                            <li className="mb-5">
                              <h3 className="font-medium ">
                                <FormattedMessage
                                  id={
                                    "CONTRACT.EXTRA_SERVICES.SERVICE." +
                                    service.toUpperCase() +
                                    ".TITLE"
                                  }
                                />{" "}
                                (
                                {pricing.external[selectedProvider]
                                  .extra_services[service][0] == "percent"
                                  ? pricing.external[selectedProvider]
                                      .extra_services[service][1]
                                  : Math.ceil(
                                      pricing.external[selectedProvider]
                                        .extra_services[service][1] *
                                        (1 - discount / 100),
                                    )}
                                {pricing.external[selectedProvider]
                                  .extra_services[service][0] == "percent"
                                  ? "%"
                                  : " " + currency.symbol}
                                )
                              </h3>
                              <p className="text-sm ">
                                <FormattedMessage
                                  id={
                                    "CONTRACT.EXTRA_SERVICES.SERVICE." +
                                    service.toUpperCase() +
                                    ".DESCRIPTION"
                                  }
                                />
                              </p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                )}
            </>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 lg:items-end">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-medium leading-none ">
                <FormattedMessage id={"CONTRACT.INSURANCE.HEADER.TITLE"} />
              </h1>
            </div>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8 py-4">
              <p className="text-sm ">
                <FormattedMessage
                  id={"CONTRACT.INSURANCE.DESCRIPTION"}
                  values={{
                    ...pricing.insurance,
                    currency: currency.symbol,
                    fee: Math.ceil(
                      pricing.insurance.fee * (1 - discount / 100),
                    ),
                  }}
                />
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 lg:items-end">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-medium leading-none ">
                <FormattedMessage id={"CONTRACT.FUEL_SURCHARGE.HEADER.TITLE"} />
              </h1>
              <div className="flex items-center gap-2 text-sm font-normal ">
                <FormattedMessage
                  id={"CONTRACT.FUEL_SURCHARGE.HEADER.DESCRIPTION"}
                />
              </div>
            </div>
          </div>

          <Card>
            <CardContent>
              <div className="max-w-full overflow-x-auto">
                <table className="table w-full min-w-max">
                  <thead>
                    <tr>
                      <th className="table-border-s table-border-t !p-3.5 text-right font-bold">
                        {currency.symbol}
                      </th>
                      {pricing.fuel_surcharge.steps.map((v, k) => (
                        <th className="table-border-s table-border-t !p-3.5 text-center font-bold">
                          {k == 0
                            ? "<= " + v
                            : [1 + pricing.fuel_surcharge.steps[k - 1], v].join(
                                " - ",
                              )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-border-s !p-3.5 text-right">%</td>
                      {pricing.fuel_surcharge.extra_cost_percent.map((v, k) => (
                        <td className="table-border-s !p-3.5 text-center">
                          {v} %
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 lg:items-end">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-medium leading-none ">
                <FormattedMessage id={"CONTRACT.COD.HEADER.TITLE"} />
              </h1>
              <div className="flex items-center gap-2 text-sm font-normal ">
                <FormattedMessage
                  id={"CONTRACT.COD.HEADER.DESCRIPTION"}
                  values={{ maximum: formatNumber(pricing.cod.maximum) }}
                />
              </div>
            </div>
          </div>

          <Card>
            <CardContent>
              <div className="max-w-full overflow-x-auto">
                <table className="table w-full min-w-max">
                  <thead>
                    <tr>
                      <th className="table-border-s table-border-t !p-3.5 text-right font-bold">
                        <FormattedMessage
                          id={"CONTRACT.COD.TABLE.AMOUNT.TITLE"}
                        />
                      </th>
                      {pricing.cod.steps.map((v, k) => (
                        <th className="table-border-s table-border-t !p-3.5 text-center font-bold">
                          {k == pricing.cod.steps.length - 1 ? (
                            ">= " + v + " " + currency.symbol
                          ) : (
                            <>
                              <FormattedNumber value={v} /> -{" "}
                              <FormattedNumber
                                value={pricing.cod.steps[k + 1] - 1}
                              />{" "}
                              {currency.symbol}
                            </>
                          )}
                        </th>
                      ))}
                      <th className="table-border-s table-border-t !p-3.5 text-center font-bold">
                        <FormattedMessage
                          id={"CONTRACT.COD.TABLE.CREDITCARD.TITLE"}
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-border-s !p-3.5 text-right">
                        <FormattedMessage
                          id={"CONTRACT.COD.TABLE.PRICE.TITLE"}
                        />
                      </td>
                      {pricing.cod.fee.map((v, k) => (
                        <td className="table-border-s !p-3.5 text-center">
                          + {Math.ceil(v * (1 - discount / 100))}{" "}
                          {currency.symbol}
                        </td>
                      ))}
                      <td className="table-border-s !p-3.5 text-center">
                        + {pricing.cod.over_max} %
                      </td>
                      <td className="table-border-s !p-3.5 text-center">
                        + {pricing.cod.creditcard} %
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const DefaultTooltip = ({ children, title }) => {
  return <>{children}</>;
};

const KeenIcon = ({ icon, style, className = "", ...props }) => {
  return (
    <i {...props} className={clsx(`ki-${style}`, `ki-${icon}`, className)} />
  );
};
