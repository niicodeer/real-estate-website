import SquaresPattern1 from "../assets/SquaresPattern1";
import Button from "./Button";
import SquaresPattern2 from "../assets/SquaresPattern2";

export default function SectionCTA() {
  return (
    <section className="w-full flex justify-center border-y-2 border-gray-15 -mt-12 relative z-0 overflow-hidden px-4">
      <div className="absolute lg:-left-4 -top-[40%] lg:top-[18%] w-[400px] lg:w-[566px]">
        <SquaresPattern1 />
      </div>
      <div className="container py-12 lg:p-14 2xl:py-24 flex justify-between lg:items-center z-10 flex-col lg:flex-row">
        <div className="w-full mb-7 lg:mb-0 xl:max-w-[980px] 2xl:max-w-[1144px]">
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-4 text-white xl:leading-[72px]">
            Start Your Real Estate Journey Today
          </h1>
          <p className="w-full leading-relaxed text-gray-60 text-sm lg:text-base 2xl:text-lg">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Button primary text="Explore Properties" />
      </div>
      <div className="absolute -right-8 lg:-right-6 -bottom-6 lg:-bottom-6 w-[400px] lg:w-[725px]">
        <SquaresPattern2 />
      </div>
    </section>
  );
}
