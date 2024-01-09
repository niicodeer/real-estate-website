import { faqs } from "../data/data";
import CardFaq from "./CardFaq";
import Slider from "./Slider";

export default function SectionFaqs() {
  return (
    <Slider data={faqs} elementsPerView={3} buttonText="View All FAQ’s">
      <CardFaq />
    </Slider>
  );
}
