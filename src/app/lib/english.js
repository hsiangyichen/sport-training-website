const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  {
    label: "VOLLEYBALL",
    subLinks: [
      {
        href: "/volleyball/detail",
        label: "Volleyball Details",
      },
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
  { href: "#contact", label: "CONTACT" },
];

export default navLinks;

// export const whatWeOffer = {
//   whatWeOffer: "WHAT WE OFFER",
//   sections: [
//     {
//       title: "Our Coaches",
//       description:
//         "Current Hong Kong Men’s Volleyball Team member. Passionate, experienced, and highly qualified, our coaches provide personalized training to help athletes reach their full potential.",
//       linkText: "Read More",
//       linkHref: "/coaches",
//     },
//     {
//       title: "Different Programs",
//       description:
//         "Comprehensive programs in volleyball, focusing on skill development, tactics and conditioning. Suitable for beginners and advanced players.",
//       linkText: "Read More",
//       linkHref: "/volleyball",
//     },
//     {
//       title: "Coaching Support",
//       description:
//         "Collaborate with schools to design tailored coaching programs, including regular training sessions, fitness programs, and performance analysis.",
//       linkText: "Read More",
//       linkHref: "/coaching-support",
//     },
//   ],
// };
