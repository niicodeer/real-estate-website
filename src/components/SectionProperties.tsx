import { properties } from "../data/data";
import CardProperty from "./CardProperty";
import Slider from "./Slider";

export default function SectionProperties() {
  return (
    <Slider data={properties} elementsPerView={3} buttonText="View All Properties">
      <CardProperty />
    </Slider>
  );
  {
    /* <div className="flex flex-wrap justify-between overflow-hidden">
      {properties.map((prop, i) => (
        <CardProperty key={i} data={prop} secondary />
      ))}
    </div> */
  }
}
