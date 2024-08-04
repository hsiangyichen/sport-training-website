import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Contact from "@/components/Contact";

const FAQ = () => {
  const t = useTranslations("FAQ");

  const faqItems = [
    {
      question: t("trainingLocation.question"),
      answer: t("trainingLocation.answer"),
    },
    {
      question: t("makeupOrRefund.question"),
      answer: t("makeupOrRefund.answer"),
    },
    {
      question: t("trialOrJoin.question"),
      answer: t("trialOrJoin.answer"),
    },
    {
      question: t("severeWeather.question"),
      answer: (
        <>
          <p>{t("severeWeather.answer")}</p>
          <div className="mt-6">
            <Image
              src="/images/Weather.jpg"
              alt="Severe Weather Icon"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="custom-font text-5xl font-semibold text-gray-900 mb-12 text-center">
          {t("title")}
        </h1>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.question}
              </h2>
              <div className="text-gray-600">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default FAQ;
