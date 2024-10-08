import { Inter } from "next/font/google";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "./globals.css";
import "./../styles/fonts.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import en from "../../../messages/en.json";
import zh from "../../../messages/zh.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sky Sports Academy",
  description: "Sky Sports Academy offers different training programs",
};

const messages = { en, zh };

export default function RootLayout({ children, params: { locale } }) {
  const currentLocale = locale || "en"; // Fallback to 'en' if locale is not provided

  if (!messages[currentLocale]) {
    notFound();
  }

  return (
    <html lang={currentLocale}>
      <body className={inter.className}>
        <NextIntlClientProvider
          locale={currentLocale}
          messages={messages[currentLocale]}
        >
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
