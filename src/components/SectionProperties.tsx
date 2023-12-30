import { properties } from "../data/data";
import CardProperty from "./CardProperty";

export default function SectionProperties() {
  return (
    <div className="flex flex-wrap justify-between overflow-hidden">
      {properties.map((prop, i) => (
        <CardProperty key={i} data={prop} />
      ))}
    </div>
  );
}
