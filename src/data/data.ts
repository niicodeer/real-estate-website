export type TestimonialType = {
  stars: number;
  title: string;
  text: string;
  image: string;
  name: string;
  city: string;
};

export type FaqType = {
  question: string;
  description: string;
};

export type PropertyType = {
  title: string;
  description: string;
  image: string;
  ammenities: {
    bed: string;
    bath: string;
    place: string;
  };
  price: string;
};

export const testimonials: Array<TestimonialType> = [
  {
    stars: 5,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: "\\src\\assets\\images\\profile-wade-warren.png",
    name: "Wade Warren",
    city: "USA, California",
  },
  {
    stars: 5,
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: "\\src\\assets\\images\\profile-emilie-thomson.png",
    name: "Emelie Thomson",
    city: "USA, Florida",
  },
  {
    stars: 5,
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    image: "\\src\\assets\\images\\profile-john-mans.png",
    name: "John Mans",
    city: "USA, Nevada",
  },
];

export const faqs: Array<FaqType> = [
  {
    question: "How do I search for properties on Estatein?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    description:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "How can I contact an Estatein agent?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

export const properties: PropertyType[] = [
  {
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    image: "src\\assets\\images\\prop1.png",
    ammenities: {
      bed: "4-Bedroom",
      bath: "3-Bathroom",
      place: "Villa",
    },
    price: "$550,000",
  },
  {
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    image: "src\\assets\\images\\prop2.png",
    ammenities: {
      bed: "2-Bedroom",
      bath: "2-Bathroom",
      place: "Villa",
    },
    price: "$550,000",
  },
  {
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    image: "src\\assets\\images\\prop3.png",
    ammenities: {
      bed: "3-Bedroom",
      bath: "3-Bathroom",
      place: "Villa",
    },
    price: "$550,000",
  },
];
