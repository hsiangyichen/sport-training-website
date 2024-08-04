// "use client";

// import { useLocale } from "next-intl";
// import { useRouter } from "next/navigation";
// import { useTransition } from "react";

// export default function LocaleSwitcher() {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const localActive = useLocale();

//   const languages = [
//     { code: "en", label: "English" },
//     { code: "zh", label: "中文" },
//   ];

//   const onLanguageChange = (nextLocale) => {
//     startTransition(() => {
//       router.replace(`/${nextLocale}`);
//     });
//   };

//   return (
//     <div className="flex space-x-4">
//       {languages.map((language) => (
//         <button
//           key={language.code}
//           className={`${
//             localActive === language.code ? "" : "text-neutral-400"
//           } ${language.label === "中文" ? "w-8" : "w-12"}`}
//           onClick={() => onLanguageChange(language.code)}
//           disabled={isPending}
//         >
//           {language.label}
//         </button>
//       ))}
//     </div>
//   );
// }

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
