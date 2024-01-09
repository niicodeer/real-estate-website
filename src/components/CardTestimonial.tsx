import IconStar from "../assets/icons/IconStar";
import { TestimonialType } from "../data/data";
import CardContainer from "./CardContainer";

/* type CardTestimonialProps = {
  data?: TestimonialType;
}; */
export default function CardTestimonial({ stars, title, text, image, name, city }: TestimonialType) {
  return (
    <CardContainer>
      <div className="text-white p-7 lg:p-10 2xl:p-12 w-full min-w-[360px] lg:max-w-[412px] 2xl:max-w-[512px] flex flex-col gap-6 2xl:gap-10 items-start">
        <div className="flex gap-x-2.5">
          {[...Array(stars)].map((_, index) => (
            <div
              key={index}
              className="w-8 h-8 lg:w-9 2xl:w-11 lg:h-9 2xl:h-11 bg-gray-10 rounded-full border border-gray-15 inline-flex justify-center items-center p-2"
            >
              <IconStar />
            </div>
          ))}
        </div>
        <div className="min-h-32 lg:min-h-40">
          <h2 className="text-base lg:text-xl 2xl:text-2xl font-semibold mb-2 2xl:mb-4">{title}</h2>
          <p className="text-sm lg:text-[16px] 2xl:text-base leading-relaxed">{text}</p>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src={image}
            className="object-contain w-[50px] h-[50px] lg:w-16 lg:h-16 rounded-full"
          />
          <div>
            <h3 className="text-[16px] lg:text-base 2xl:text-xl font-medium">{name}</h3>
            <span className="text-sm lg:text-[16px] 2xl:text-base text-gray-60 font-medium">
              {city}
            </span>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
