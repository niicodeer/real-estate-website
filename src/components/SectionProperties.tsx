import { properties } from "../data/data";
import CardProperty from "./CardProperty";
import Slider from "./Slider";

export default function SectionProperties() {
  return (
    <Slider data={properties} elementsPerView={3} buttonText="View All Properties">
      <CardProperty />
    </Slider>
  );
}
