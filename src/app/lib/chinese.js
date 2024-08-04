const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我們" },
  {
    label: "排球",
    subLinks: [
      {
        href: "/volleyball/regular-class",
        label:
          "Volleyball Regular Class (every sat in July to August) - Sign up",
      },
      {
        href: "/volleyball/summer-camp",
        label: "Volleyball Summer Camp (from 15/7- 19) - Sign up",
      },
      {
        href: "/volleyball/experience-day",
        label: "Volleyball Experience Day for school or 機構 - Sign up",
      },
      { href: "/volleyball/coaches", label: "Coaches" },
    ],
  },
  { href: "#contact", label: "聯絡我們" },
];

export default navLinks;

// export const navLinks = [
//   { href: "/", label: "首頁" },
//   { href: "/about", label: "關於我們" },
//   {
//     label: "排球",
//     subLinks: [
//       {
//         href: "/volleyball/regular-class",
//         label:
//           "Volleyball Regular Class (every sat in July to August) - Sign up",
//       },
//       {
//         href: "/volleyball/summer-camp",
//         label: "Volleyball Summer Camp (from 15/7- 19) - Sign up",
//       },
//       {
//         href: "/volleyball/experience-day",
//         label: "Volleyball Experience Day for school or 機構 - Sign up",
//       },
//       { href: "/volleyball/coaches", label: "Coaches" },
//     ],
//   },
//   { href: "#contact", label: "聯絡我們" },
// ];

// export const whatWeOffer = {
//   whatWeOffer: "我們提供",
//   sections: [
//     {
//       title: "精英教練團隊",
//       description:
//         "現役香港男子排球隊成員。充滿激情、經驗豐富且高素質，我們的教練提供個性化培訓，幫助運動員充分發揮潛力。",
//       linkText: "了解更多",
//       linkHref: "/coaches-cn",
//     },
//     {
//       title: "訓練班",
//       description:
//         "我們提供完善的排球教學，內容包括技術培養、戰術指導以及體能訓練。無論是初學者還是有經驗的選手，這些課程都適合你。",
//       linkText: "了解更多",
//       linkHref: "/volleyball-cn",
//     },
//     {
//       title: "教練服務",
//       description:
//         "我們可以與學校合作，提供教練計劃，包括定期校隊訓練課程、體能訓練計劃以及表現分析。",
//       linkText: "了解更多",
//       linkHref: "/coaching-support-cn",
//     },
//   ],
// };
