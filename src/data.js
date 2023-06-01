import tour1 from "./images/tour1.jpeg";
import tour2 from "./images/tour2.jpeg";
import tour3 from "./images/tour3.jpeg";
import tour4 from "./images/tour4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tour" },
];

export const dataSocial = [
  {
    id: 1,
    href: "https://www.twitter.com",
    target: "_blank",
    iClassName: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    target: "_blank",
    iClassName: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    target: "_blank",
    iClassName: "fab fa-squarespace",
  },
];

export const serviceCard = [
  {
    id: 1,
    iName: "fas fa-wallet fa-fw",
    caption: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    iName: "fas fa-tree fa-fw",
    caption: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    iName: "fas fa-socks fa-fw",
    caption: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tourCard = [
  {
    id: 1,
    source: tour1,
    date: "december 5th, 2019",
    info: "Tibet Adveture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    iName: "fas fa-map",
    price: `From $${6000}`,
    days: `${20} Days`,
    place: "Tibet",
  },
  {
    id: 2,
    source: tour2,
    date: "January 12, 2024",
    info: "Best of Imo Sate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    iName: "fas fa-map",
    price: `From $${6000}`,
    days: `${20} Days`,
    place: "Imo",
  },
  {
    id: 3,
    source: tour3,
    date: "May 27, 2025",
    info: "Baltomore, MD Update",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    iName: "fas fa-map",
    price: `From $${6000}`,
    days: `${20} Days`,
    place: "Maryland",
  },
  {
    id: 4,
    source: tour4,
    date: "december 5th, 2019",
    info: "kenya highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    iName: "fas fa-map",
    price: `From $${6000}`,
    days: `${20} Days`,
    place: "Kenya",
  },
];


