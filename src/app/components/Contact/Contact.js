import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  const iconLinks = [
    {
      href: "https://www.instagram.com/skysportsacademy_hk?igsh=MTl1anloczBoZ2JxdQ%3D%3D&utm_source=qr",
      label: "instagram",
      icon: <FaInstagram className="size-7 md:size-9" />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=61557354931867",
      label: "facebook",
      icon: <FaFacebook className="size-7 md:size-9" />,
    },
    {
      href: "mailto:hkssa2023@gmail.com",
      label: "email",
      icon: <FaEnvelope className="size-7 md:size-9" />,
    },
    {
      href: "https://wa.me/85263178410",
      label: "whatsapp",
      icon: <FaWhatsapp className="size-7 md:size-9" />,
    },
  ];

  return (
    <div
      id="contact"
      className="flex pt-12 md:pt-28 flex-col w-full bg-white text-black"
    >
      <div className="flex flex-row justify-evenly w-full">
        <div className="flex flex-col custom-font text-2xl md:text-[42px] font-normal md:gap-6 md:pt-1.5">
          <a href="/about">{t("about")}</a>
          <a href="/volleyball">{t("volleyball")}</a>
          <a href="#contact">{t("contact")}</a>
        </div>
        <div className="flex flex-row gap-2 md:gap-4">
          {iconLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="px-6 pt-5 pb-12 text-center md:mx-0 md:py-28 custom-font text-sm md:text-lg md:font-normal">
        {t("inquiries")}{" "}
        <a href="mailto:hksas2023@gmail.com">hkssa2023@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
