import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./styles.module.scss";
import "../../styles/fonts.css";

const Contact = () => {
  const iconLinks = [
    {
      href: "https://www.instagram.com/skysportsacademy_hk?igsh=MTl1anloczBoZ2JxdQ%3D%3D&utm_source=qr",
      label: "instagram",
      icon: <FaInstagram className="size-9" />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=61557354931867",
      label: "facebook",
      icon: <FaFacebook className="size-9" />,
    },
    {
      href: "mailto:hkssa2023@gmail.com",
      label: "email",
      icon: <FaEnvelope className="size-9" />,
    },
    {
      href: "https://wa.me/85263178410",
      label: "whatsapp",
      icon: <FaWhatsapp className="size-9" />,
    },
  ];

  return (
    <div
      id="contact"
      className="flex pt-28 flex-col items-center justify-center bg-white text-black"
    >
      <div className="flex flex-row justify-evenly w-full">
        <div className="flex flex-col text-2xl custom-font-subtitle gap-6 pt-1.5">
          <a href="/about">ABOUT</a>
          <a href="/volleyball">VOLLEYBALL</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="flex flex-row gap-4">
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
      <p className="py-28 custom-font-content ">
        If you have any inquiries, feel free to contact us at {""}
        <a href="mailto:hksas2023@gmail.com">hkssa2023@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
