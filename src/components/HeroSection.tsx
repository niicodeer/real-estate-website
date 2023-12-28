import Button from "./Button";
import heroImage from "../assets/images/hero-image.png";
import AbstractDesign from "../assets/AbstractDesign";

export default function HeroSection() {
  return (
    <section className="text-white w-full ">
      <div className="w-full flex md:flex-row flex-col lg:justify-end gap-24">
        <div className="lg:max-w-[920px] lg:w-full md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 xl:pl-32 lg:pl-28 justify-center text-center">
          <h1 className="title-font sm:text-4xl lg:text-6xl mb-6 font-semibold text-white">
            Discover Your Dream
            <br className="hidden lg:inline-block" />
            Property with Estatein
          </h1>
          <p className="mb-16 leading-relaxed text-base text-gray-60">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="flex gap-6">
            <Button text={"Learn more"} />
            <Button text={"Browse properties"} primary />
          </div>
          {/* Stats */}
          <div className="container flex justify-between mt-16">
            <div className="py-4 px-6 ring-2 ring-inset ring-gray-15 rounded-xl max-w-60 w-full">
              <h2 className="title-font font-bold text-4xl text-white pb-1">
                200+
              </h2>
              <p className="leading-relaxed text-base text-gray-60">
                Happy Customers
              </p>
            </div>
            <div className="py-4 px-6 ring-2 ring-inset ring-gray-15 rounded-xl max-w-56 w-full">
              <h2 className="title-font font-bold text-4xl text-white pb-1">
                10k+
              </h2>
              <p className="leading-relaxed text-base text-gray-60">
                Properties For Clients
              </p>
            </div>
            <div className="py-4 px-6 ring-2 ring-inset ring-gray-15 rounded-xl max-w-56 w-full">
              <h2 className="title-font font-bold text-4xl text-white pb-1">
                16+
              </h2>
              <p className="leading-relaxed text-base text-gray-60">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:max-w-[920px] lg:w-full md:w-1/2 w-5/6 bg-gray-10 overflow-hidden z-0 self-end">
          <img
            className="object-cover object-center rounded z-10"
            alt="hero"
            src={heroImage}
          />
          <div className="absolute -top-[5%] -left-[5%] -z-10">
            <AbstractDesign />
          </div>
        </div>
      </div>
    </section>
  );
}
