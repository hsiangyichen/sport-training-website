"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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

  const renderNavLinks = (isMobile = false) => (
    <>
      <Link href="/" legacyBehavior>
        <a onClick={isMobile ? closeMenu : undefined}>{t("home")}</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a onClick={isMobile ? closeMenu : undefined}>{t("about")}</a>
      </Link>
      <div className="relative inline-block">
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleDropdown}
        >
          {t("volleyball.label")} <FiChevronDown className="ml-1" />
        </button>
        {dropdownOpen && (
          <>
            <div className="absolute left-0 mt-2 w-36 md:w-48 bg-white shadow-xl z-50 hidden lg:block">
              <Link href="/volleyball" legacyBehavior>
                <a
                  className="block px-2 md:px-4 py-3 text-sm text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  {t("volleyball.details")}
                </a>
              </Link>
              <Link href="/volleyball/regularCourse" legacyBehavior>
                <a
                  className="block px-2 md:px-4 py-3 text-sm text-gray-800 hover:bg-gray-200 border-t"
                  onClick={closeDropdown}
                >
                  {t("volleyball.regularCourse")}
                </a>
              </Link>
              <Link href="/volleyball/trainingCamp" legacyBehavior>
                <a
                  className="block px-2 md:px-4 py-3 text-sm text-gray-800 hover:bg-gray-200 border-t"
                  onClick={closeDropdown}
                >
                  {t("volleyball.trainingCamp")}
                </a>
              </Link>
              <Link href="/volleyball/experienceDay" legacyBehavior>
                <a
                  className="block px-2 md:px-4 py-3 text-sm text-gray-800 hover:bg-gray-200 border-t"
                  onClick={closeDropdown}
                >
                  {t("volleyball.experienceDay")}
                </a>
              </Link>
              <Link href="/volleyball/coachingSupport" legacyBehavior>
                <a
                  className="block px-2 md:px-4 py-3 text-sm text-gray-800 hover:bg-gray-200 border-t"
                  onClick={closeDropdown}
                >
                  {t("volleyball.coachingSupport")}
                </a>
              </Link>
              <Link href="/volleyball/coaches" legacyBehavior>
                <a
                  className="block px-2 md:px-4 py-3 text-sm text-gray-800 hover:bg-gray-200 border-t"
                  onClick={closeDropdown}
                >
                  {t("volleyball.coaches")}
                </a>
              </Link>
            </div>
            <div className="absolute left-0 mt-2 w-36 bg-zinc-900 shadow-xl z-50 lg:hidden">
              <Link href="/volleyball" legacyBehavior>
                <a
                  className="block px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                  onClick={closeDropdown}
                >
                  {t("volleyball.details")}
                </a>
              </Link>
              <Link href="/volleyball/regularCourse" legacyBehavior>
                <a
                  className="block px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                  onClick={closeDropdown}
                >
                  {t("volleyball.regularCourse")}
                </a>
              </Link>
              <Link href="/volleyball/trainingCamp" legacyBehavior>
                <a
                  className="block px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                  onClick={closeDropdown}
                >
                  {t("volleyball.trainingCamp")}
                </a>
              </Link>
              <Link href="/volleyball/experienceDay" legacyBehavior>
                <a
                  className="block px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                  onClick={closeDropdown}
                >
                  {t("volleyball.experienceDay")}
                </a>
              </Link>
              <Link href="/volleyball/coachingSupport" legacyBehavior>
                <a
                  className="block px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                  onClick={closeDropdown}
                >
                  {t("volleyball.coachingSupport")}
                </a>
              </Link>
              <Link href="/volleyball/coaches" legacyBehavior>
                <a
                  className="block px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                  onClick={closeDropdown}
                >
                  {t("volleyball.coaches")}
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
      <Link href="#contact" legacyBehavior>
        <a onClick={isMobile ? closeMenu : undefined}>{t("contact")}</a>
      </Link>
      <Link href="/faq" legacyBehavior>
        <a onClick={isMobile ? closeMenu : undefined}>{t("faq")}</a>
      </Link>
    </>
  );

  return (
    <nav className="w-full px-10 flex justify-between items-center py-6 h-[10vh]">
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
      <div className="hidden lg:flex justify-end items-center text-sm gap-6">
        <div className="flex items-center space-x-6 relative">
          {renderNavLinks()}
        </div>
        <span>|</span>
        <div className="flex items-center space-x-4">
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
        <span>|</span>
        <LocaleSwitcher />
      </div>
      <div className="lg:hidden flex justify-end items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-zinc-900 opacity-95 text-white flex space-y-6 flex-col items-center justify-center transition-transform transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-full z-40 lg:hidden`}
      >
        {renderNavLinks(true)}
        <div className="flex items-center space-x-4 ">
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
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
