import { pricingDetailsType } from "../data/data";
import Button from "./Button";
import CardContainer from "./CardContainer";
import PriceDetailItem from "./PriceDetailItem";
import SeparatorLine from "./SeparatorLine";
import TitleH3 from "./TitleH3";

export default function CardPricingDetail({
  category,
  taxes,
}: pricingDetailsType) {
  return (
    <CardContainer className="p-5 xl:p-10 w-full">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <TitleH3 text={category} />
          <Button secondary text="Learn More" />
        </div>
        <SeparatorLine />
        <div className="flex flex-col xl:flex-wrap xl:flex-row gap-5">
          {taxes.map((tax, i) => (
            <>
              {/*               <div className="flex xl:hidden">
                <PriceDetailItem
                  key={i}
                  concept={tax.title}
                  price={`${tax.price}`}
                  text={tax.description}
                />
                {i === taxes.length - 1 ? (
                  <div className="hidden">
                    <SeparatorLine />{" "}
                  </div>
                ) : i % 2 === 0 ? (
                  <SeparatorLine vertical /> //TODO: hacer que se acomode en pantallas grandes la linea vertical. Agregar gap entre las cards
                ) : (
                  <SeparatorLine />
                )}
              </div> */}

              <PriceDetailItem
                key={i}
                concept={tax.title}
                price={`${tax.price}`}
                text={tax.description}
              />
              {i === taxes.length - 1 ? (
                <div className="hidden">
                  <SeparatorLine />{" "}
                </div>
              ) : i % 2 === 0 ? (
                <>
                  <div className="hidden xl:flex">
                    <SeparatorLine vertical />
                  </div>
                  <div className="xl:hidden">
                    <SeparatorLine />
                  </div>
                </> //TODO: hacer que se acomode en pantallas grandes la linea vertical. Agregar gap entre las cards
              ) : (
                <SeparatorLine />
              )}
            </>
          ))}
        </div>
      </div>
    </CardContainer>
  );
}
