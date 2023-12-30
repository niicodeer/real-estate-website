type linksType={
  category:string,
  links: Array<string>
}
export const links:Array<linksType>= [
  {
    category: "Home",
    links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ’s"],
  },
  {
    category: "About Us",
    links: [
      "Our Story",
      "Our Works",
      "How It Works",
      "Our Team",
      "Our Clients",
    ],
  },
  {
    category: "Properties",
    links: ["Portfolio", "Categories"],
  },
  {
    category: "Services",
    links: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  },
  {
    category: "Contact Us",
    links: ["Contact Form", "Our Offices"],
  },
];
