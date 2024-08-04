"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocalSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

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

  return (
    <nav className="w-full px-10 flex justify-between items-center py-6 h-[10vh] ">
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
        <div className="flex space-x-6 relative">
          <Link href="/" legacyBehavior>
            <a>{t("home")}</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>{t("about")}</a>
          </Link>
          <div className="relative">
            <button
              className="flex items-center focus:outline-none"
              onClick={toggleDropdown}
            >
              {t("volleyball.label")} <FiChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl z-50">
                <Link href="/volleyball" legacyBehavior>
                  <a
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    {t("volleyball.details")}
                  </a>
                </Link>
                <Link href="/volleyball/regularClass" legacyBehavior>
                  <a
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200 border-t"
                    onClick={closeDropdown}
                  >
                    {t("volleyball.regularClass")}
                  </a>
                </Link>
                <Link href="/volleyball/trainingCamp" legacyBehavior>
                  <a
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200 border-t"
                    onClick={closeDropdown}
                  >
                    {t("volleyball.trainingCamp")}
                  </a>
                </Link>
                <Link href="/volleyball/experienceDay" legacyBehavior>
                  <a
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200 border-t"
                    onClick={closeDropdown}
                  >
                    {t("volleyball.experienceDay")}
                  </a>
                </Link>
                <Link href="/volleyball/coachingSupport" legacyBehavior>
                  <a
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200 border-t"
                    onClick={closeDropdown}
                  >
                    {t("volleyball.coachingSupport")}
                  </a>
                </Link>
                <Link href="/volleyball/coaches" legacyBehavior>
                  <a
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200 border-t"
                    onClick={closeDropdown}
                  >
                    {t("volleyball.coaches")}
                  </a>
                </Link>
              </div>
            )}
          </div>
          <Link href="#contact" legacyBehavior>
            <a>{t("contact")}</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a>{t("faq")}</a>
          </Link>
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
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
