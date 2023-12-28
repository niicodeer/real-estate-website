import card1 from "../assets/images/card-img1.png";
import Button from "./Button";
import CardContainer from "./CardContainer";

export default function CardProperty() {
  return (
    <CardContainer>
      <div className="w-full p-10 max-w-[512px]">
        <div className="">
          <img
            className="h-80 rounded-xl w-full object-cover object-center mb-6"
            src={card1}
            alt="content"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-2xl text-white font-semibold mb-2">
              Seaside Serenity Villa
            </h2>
            <p className="leading-relaxed text-base text-gray-60">
              A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
              neighborhood...{" "}
              <a href="#" className="text-white underline">
                Read More
              </a>
            </p>
          </div>
          <div className="flex w-full justify-between">
            <span className="px-3 py-2 rounded-3xl bg-gray-10 border border-gray-15 text-white text-base">
              4-Bedrooms
            </span>
            <span className="px-3 py-2 rounded-3xl bg-gray-10 border border-gray-15 text-white text-base">
              4-Bedrooms
            </span>
            <span className="px-3 py-2 rounded-3xl bg-gray-10 border border-gray-15 text-white text-base">
              4-Bedrooms
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-60 text-base">Price</p>
              <h3 className="text-white text-2xl font-semibold">$550,000</h3>
            </div>
            <Button primary text="View Property Details" />
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
