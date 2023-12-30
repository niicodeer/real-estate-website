import IconSun from "../assets/icons/IconSun";
import IconBuilding from "../assets/icons/IconBuilding";
import IconMoney from "../assets/icons/IconMoney";
import IconStore from "../assets/icons/IconStore";
import FeatureSectionItem from "./FeatureSectionItem";

export default function FeaturesSection() {
  return (
    <section>
      <div className="flex flex-wrap text-center border-8 border-gray-15 rounded-xl lg:rounded-none">
        <FeatureSectionItem title="Find Your Dream Home">
          <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20">
            <IconStore />
          </div>
        </FeatureSectionItem>
        <FeatureSectionItem title="Unlock Property Value">
          <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20">
            <IconMoney />
          </div>
        </FeatureSectionItem>
        <FeatureSectionItem title="Effortless Property Management">
          <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20">
            <IconBuilding />
          </div>
        </FeatureSectionItem>
        <FeatureSectionItem title="Smart Investments, Informed Decisions">
          <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20">
            <IconSun />
          </div>
        </FeatureSectionItem>
      </div>
    </section>
  );
}
