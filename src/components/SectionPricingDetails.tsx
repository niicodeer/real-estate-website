import { pricingDetails } from "../data/data";
import CardPricingDetail from "./CardPricingDetail";

export default function SectionPricingDetails() {
  return (
    <div className="flex flex-wrap ">
      {pricingDetails.map((item, i) => (
        <CardPricingDetail
          category={item.category}
          taxes={item.taxes}
          key={i}
        />
      ))}
    </div>
  );
}
