import prop1 from '../assets/prop1.png'
import prop2 from '../assets/prop2.png'
import prop3 from '../assets/prop3.png'

import davidBrown from '../assets/member-david-brown.png'
import maxMitchel from '../assets/member-max-mitchel.png'
import michaelTurner from '../assets/member-michael-turner.png'
import sarahJohnson from '../assets/member-sarah-johnson.png'

import wadeWarren from '../assets/profile-wade-warren.png'
import emilieThomson from '../assets/profile-emilie-thomson.png'
import johnMans from '../assets/profile-john-mans.png'



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

export type pricingDetailsType = {
  category: string;
  taxes: { title: string; price: string; description: string }[];
};

export const testimonials: Array<TestimonialType> = [
  {
    stars: 5,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: wadeWarren,
    name: "Wade Warren",
    city: "USA, California",
  },
  {
    stars: 5,
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: emilieThomson,
    name: "Emelie Thomson",
    city: "USA, Florida",
  },
  {
    stars: 5,
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    image: johnMans,
    name: "John Mans",
    city: "USA, Nevada",
  },
  {
    stars: 4,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: wadeWarren,
    name: "Wade Warren",
    city: "USA, California",
  },
  {
    stars: 3,
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: emilieThomson,
    name: "Emelie Thomson",
    city: "USA, Florida",
  },
  {
    stars: 2,
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    image: johnMans,
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
    image: prop1,
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
    image: prop2,
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
    image: prop3,
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
    image: prop1,
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
    image: prop2,
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
    image: prop3,
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
    image: maxMitchel,
    twitter: "#",
    name: "Max Mitchell",
    ocuppation: "Founder",
  },
  {
    image: sarahJohnson,
    twitter: "#",
    name: "Sarah Johnson",
    ocuppation: "Chief Real Estate Officer",
  },
  {
    image: davidBrown,
    twitter: "#",
    name: "David Brown",
    ocuppation: "Head of Property Management",
  },
  {
    image: michaelTurner,
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

export const pricingDetails: pricingDetailsType[] = [
  {
    category: "Additional Fees",
    taxes: [
      {
        title: "Property Transfer Tax",
        price: "$25,000",
        description: "Based on the sale price and local regulations",
      },
      {
        title: "Legal Fees",
        price: "$3,000",
        description:
          "Approximate cost for legal services, including title transfer",
      },
      {
        title: "Home Inspection",
        price: "$500",
        description: "Recommended for due diligence",
      },
      {
        title: "Property Insurance",
        price: "$1,200",
        description: "Annual cost for comprehensive property insurance",
      },
      {
        title: "Mortgage Fees",
        price: "Varies",
        description:
          "If applicable, consult with your lender for specific details",
      },
    ],
  },
  {
    category: "Monthly Costs",
    taxes: [
      {
        title: "Property Taxes",
        price: "$1,250",
        description:
          "Approximate monthly property tax based on the sale price and local rates",
      },
      {
        title: "Homeowners' Association Fee",
        price: "$300",
        description: "Monthly fee for common area maintenance and security",
      },
    ],
  },
  {
    category: "Total Initial Costs",
    taxes: [
      {
        title: "Listing Price",
        price: "$1,250,000",
        description:
          "",
      },
      {
        title: "Additional Fees",
        price: "$29,700",
        description: "Property transfer tax, legal fees, inspection, insurance",
      },
      {
        title: "Down Payment",
        price: "$250,000",
        description: "20%",
      },
      {
        title: "Mortgage Amount",
        price: "$1,000,000",
        description: "If applicable",
      },
    ],
  },
  {
    category: "Monthly Expenses",
    taxes: [
      {
        title: "Property Taxes",
        price: "$1,250",
        description:
          "",
      },
      {
        title: "Homeowners' Association Fee",
        price: "$300",
        description: "",
      },
      {
        title: "Mortgage Payment",
        price: "Varies based on terms and interest rate",
        description: "",
      },
      {
        title: "Property Insurance",
        price: "$100",
        description: "Approximate monthly cost",
      },
    ],
  },
];
