import { PropertyType } from "../data/data";
import AmmenityBadge from "./AmmenityBadge";
import Button from "./Button";
import CardContainer from "./CardContainer";
import TextBadge from "./TextBadge";

type CardPropertyProps = {
  data?: PropertyType;
  secondary?: boolean;
  image?:string;
  title?:string;
  description?:string;
  epigraph?:string;
  ammenities?: {
    bed:string,
    bath:string,
    place:string,
  };
  price?:string
};

export default function CardProperty({ data,secondary, image, title, description, epigraph, ammenities, price }: CardPropertyProps) {
  return (
    <CardContainer>
      <div className="w-full p-6 lg:p-7 2xl:p-10 min-w-[360px] lg:max-w-[410px] 2xl:max-w-[512px]">
        <div className="mb-4 xl:mb-6 2xl:mb-7">
          <img
            className="h-52 lg:h-64 2xl:h-80 rounded-xl w-full object-cover object-center"
            src={data?.image || image }
            alt={data?.title ||title }
          />
        </div>
        <div className="flex flex-col gap-5 lg:gap-7">
          <div>
            {secondary && <div className="mb-4 2xl:mb-5"><TextBadge text={data?.epigraph || epigraph} /></div>}
            <h2 className="text-lg lg:text-xl 2xl:text-2xl text-white font-semibold mb-2">
              {data?.title ||title}
            </h2>
            <p className="leading-relaxed text-sm lg:text-base 2xl:text-lg text-gray-60">
              {data?.description || description}{" "}
              <a href="#" className="text-white underline">
                Read More
              </a>
            </p>
          </div>
          {!secondary && (
            <div className="flex w-full flex-wrap gap-1">
              {data?.ammenities.bed || ammenities?.bed && (
                <AmmenityBadge bed={data?.ammenities.bed || ammenities?.bed} />
              )}
              {data?.ammenities.bath || ammenities?.bath && (
                <AmmenityBadge bath={data?.ammenities.bath || ammenities?.bath } />
              )}
              {data?.ammenities.place || ammenities?.place && (
                <AmmenityBadge place={data?.ammenities.place || ammenities?.place} />
              )}
            </div>
          )}
          <div className="flex justify-between">
            <div>
              <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
                Price
              </p>
              <h3 className="text-white text-lg lg:text-xl 2xl:text-2xl font-semibold">
                {data?.price || price}
              </h3>
            </div>
            <Button primary text="View Property Details" />
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
