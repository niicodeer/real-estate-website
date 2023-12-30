import { PropertyType } from "../data/data";
import AmmenityBadge from "./AmmenityBadge";
import Button from "./Button";
import CardContainer from "./CardContainer";

type CardPropertyProps = {
  data: PropertyType;
};

export default function CardProperty({ data }: CardPropertyProps) {
  return (
    <CardContainer>
      <div className="w-full p-6 lg:p-7 2xl:p-10 lg:max-w-[412px] 2xl:max-w-[512px]">
        <div className="mb-4 lg:mb-6">
          <img
            className="h-52 lg:h-64 2xl:h-80 rounded-xl w-full object-cover object-center"
            src={data.image}
            alt={data.title}
          />
        </div>
        <div className="flex flex-col gap-5 lg:gap-7">
          <div>
            <h2 className="text-base lg:text-xl 2xl:text-2xl text-white font-semibold mb-2">
              {data.title}
            </h2>
            <p className="leading-relaxed text-sm lg:text-[16px] 2xl:text-base text-gray-60">
              {data.description}{" "}
              <a href="#" className="text-white underline">
                Read More
              </a>
            </p>
          </div>
          <div className="flex w-full justify-between">
            {data.ammenities.bed && <AmmenityBadge bed={data.ammenities.bed} />}
            {data.ammenities.bath && (
              <AmmenityBadge bath={data.ammenities.bath} />
            )}
            {data.ammenities.place && (
              <AmmenityBadge place={data.ammenities.place} />
            )}
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-60 text-sm lg:text-[16px] 2xl:text-base">Price</p>
              <h3 className="text-white text-base lg:text-xl 2xl:text-2xl font-semibold">
                {data.price}
              </h3>
            </div>
            <Button primary text="View Property Details" />
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
