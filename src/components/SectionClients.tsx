import { clients } from "../data/data";
import CardClients from "./CardClients";
import Slider from "./Slider";

export default function SectionClients() {
  return (
    <>
      <Slider data={clients} elementsPerView={2}>
        <CardClients />
      </Slider>
    </>
  );
}


