"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import navLinksChinese from "../lib/chinese";
import navLinksEnglish from "../lib/english";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks =
    selectedLanguage === "english" ? navLinksEnglish : navLinksChinese;

  const iconLinks = [
    {
      href: "https://www.instagram.com/skysportsacademy_hk?igsh=MTl1anloczBoZ2JxdQ%3D%3D&utm_source=qr",
      label: "instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=61557354931867",
      label: "facebook",
      icon: <FaFacebook />,
    },
    {
      href: "mailto:hkssa2023@gmail.com",
      label: "email",
      icon: <FaEnvelope />,
    },
    {
      href: "https://wa.me/85263178410",
      label: "whatsapp",
      icon: <FaWhatsapp />,
    },
  ];

  const languages = ["中文", "english"];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <nav className="w-full px-10 flex justify-between items-center py-6 h-[10vh] overflow-hidden">
      <div className="flex items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/images/SSA-logo-2.png"
              alt="logo"
              width={800}
              height={800}
              className="w-24"
            />
          </a>
        </Link>
      </div>

      <div className="flex justify-end items-center text-sm gap-6">
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} legacyBehavior>
              <a>{link.label}</a>
            </Link>
          ))}
        </div>
        |
        <div className="flex space-x-4">
          {iconLinks.map((iconLink, index) => (
            <a
              key={index}
              href={iconLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconLink.icon}
            </a>
          ))}
        </div>
        |
        <div className="flex space-x-4">
          {languages.map((language) => (
            <button
              key={language}
              className={`${
                selectedLanguage === language ? "" : "text-neutral-400"
              } ${language === "中文" ? "w-8" : "w-12"}`}
              onClick={() => handleLanguageChange(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
