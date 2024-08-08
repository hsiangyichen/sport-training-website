import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const locales = ["en", "zh"];
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
