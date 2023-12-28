import IconSun from "../assets/icons/IconSun";
import IconBuilding from "../assets/icons/IconBuilding";
import IconMoney from "../assets/icons/IconMoney";
import IconStore from "../assets/icons/IconStore";
import FeatureSectionItem from "./FeatureSectionItem";

export default function FeaturesSection() {
  return (
    <section>
      <div className="flex flex-wrap text-center border-8 border-gray-15">
        <FeatureSectionItem title="Find Your Dream Home">
          <IconStore />
        </FeatureSectionItem>
        <FeatureSectionItem title="Unlock Property Value">
          <IconMoney />
        </FeatureSectionItem>
        <FeatureSectionItem title="Effortless Property Management">
          <IconBuilding />
        </FeatureSectionItem>
        <FeatureSectionItem title="Smart Investments, Informed Decisions">
          <IconSun />
        </FeatureSectionItem>
      </div>
    </section>
  );
}
