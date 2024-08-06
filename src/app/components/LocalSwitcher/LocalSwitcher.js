import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const LocaleSwitcher = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const [activeLocale, setActiveLocale] = useState(locale);

  const switchLocale = (newLocale) => {
    setActiveLocale(newLocale);
    const newUrl = `/${newLocale}${pathname.substring(3)}`;
    window.location.href = newUrl;
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => switchLocale("zh")}
        className={activeLocale === "zh" ? "text-neutral-400" : ""}
      >
        {t("chinese")}
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={activeLocale === "en" ? "text-neutral-400" : ""}
      >
        {t("english")}
      </button>
    </div>
  );
};

export default LocaleSwitcher;
