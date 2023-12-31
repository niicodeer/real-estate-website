export type TestimonialType = {
  stars?: number;
  title?: string;
  text?: string;
  image?: string;
  name?: string;
  city?: string;
};

export type FaqType = {
  question?: string;
  description?: string;
};

export type PropertyType = {
  epigraph: string;
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

export type CardStepProps = {
  number: string;
  title: string;
  text: string;
};
export type CardMembersProps = {
  image: string;
  twitter: string;
  name: string;
  ocuppation: string;
};

export type CardClientsProps = {
  key?: number;
  currentIndex?: number;
  since?: string;
  title?: string;
  domain?: string;
  category?: string;
  text?: string;
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
  {
    stars: 4,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: "\\src\\assets\\images\\profile-wade-warren.png",
    name: "Wade Warren",
    city: "USA, California",
  },
  {
    stars: 3,
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: "\\src\\assets\\images\\profile-emilie-thomson.png",
    name: "Emelie Thomson",
    city: "USA, Florida",
  },
  {
    stars: 2,
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
    epigraph: "Coastal Escapes - Where Waves Beckon",
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
    epigraph: "Urban Oasis - Life in the Heart of the City",
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
    epigraph: "Countryside Charm - Escape to Nature's Embrace",
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
  {
    epigraph: "Coastal Escapes - Where Waves Beckon",
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
    epigraph: "Urban Oasis - Life in the Heart of the City",
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
    epigraph: "Countryside Charm - Escape to Nature's Embrace",
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

export const steps: CardStepProps[] = [
  {
    number: "01",
    title: "Discover a World of Possibilities",
    text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.",
  },
  {
    number: "02",
    title: "Narrowing Down Your Choices",
    text: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    number: "03",
    title: "Personalized Guidance",
    text: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    number: "04",
    title: "See It for Yourself",
    text: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    number: "05",
    title: "Making Informed Decisions",
    text: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
  },
  {
    number: "06",
    title: "Getting the Best Deal",
    text: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export const members: CardMembersProps[] = [
  {
    image: "src\\assets\\images\\member-max-mitchel.png",
    twitter: "#",
    name: "Max Mitchell",
    ocuppation: "Founder",
  },
  {
    image: "src\\assets\\images\\member-sarah-johnson.png",
    twitter: "#",
    name: "Sarah Johnson",
    ocuppation: "Chief Real Estate Officer",
  },
  {
    image: "src\\assets\\images\\member-david-brown.png",
    twitter: "#",
    name: "David Brown",
    ocuppation: "Head of Property Management",
  },
  {
    image: "src\\assets\\images\\member-michael-turner.png",
    twitter: "#",
    name: "Michael Turner",
    ocuppation: "Legal Counsel",
  },
];

export const clients: CardClientsProps[] = [
  {
    since: "2019",
    title: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    text: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
  {
    since: "2019",
    title: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    text: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];
