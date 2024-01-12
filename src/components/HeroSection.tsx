import Button from "./Button";
import heroImage from "../assets/hero-image.png";
import AbstractWaves from "../assets/AbstractWaves";

export default function HeroSection() {
  return (
    <section className="text-white w-full 2xl:max-w-[1920px] 2xl:mx-auto">
      <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between 2xl:gap-24 lg:gap-24 gap-8 relative p-4 xl:p-0">
        <div className="xl:max-w-[610px] 2xl:max-w-[920px] w-full flex flex-col md:items-start mb-16 md:mb-0 2xl:pl-32 lg:pl-20 justify-center text-left">
          <h1 className="text-3xl 2xl:text-6xl lg:text-5xl mb-6 font-semibold text-white">
            Discover Your Dream
            <br className="lg:inline-block" />
            Property with Estatein
          </h1>
          <p className="mb-16 leading-relaxed lg:text-base 2xl:text-lg text-sm text-gray-60">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="flex flex-col gap-6 lg:flex-row ">
            <Button text={"Learn more"} />
            <Button text={"Browse properties"} primary />
          </div>
          {/* Stats */}
          <div className="container flex flex-wrap justify-between mt-16 gap-3">
            <div className="py-4 px-4 2xl:px6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center">
              <h2 className="font-bold 2xl:text-4xl text-2xl text-white pb-1 2xl:leading-[60px]">
                200+
              </h2>
              <p className="leading-relaxed text-sm 2xl:text-lg text-gray-60">
                Happy Customers
              </p>
            </div>
            <div className="py-4 px-4 2xl:px6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center">
              <h2 className="font-bold 2xl:text-4xl text-2xl text-white pb-1 2xl:leading-[60px]">
                10k+
              </h2>
              <p className="leading-relaxed text-sm 2xl:text-lg text-gray-60">
                Properties For Clients
              </p>
            </div>
            <div className="py-4 px-4 2xl:px6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center">
              <h2 className="font-bold 2xl:text-4xl text-2xl text-white pb-1 2xl:leading-[60px]">
                16+
              </h2>
              <p className="leading-relaxed text-sm 2xl:text-lg text-gray-60">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
        {/* rightSide */}
        <div className="relative xl:max-w-[610px] 2xl:max-w-[920px] w-full rounded-xl lg:rounded-none my-10 lg:my-0 bg-gray-10 z-0 self-end">
          <div className="absolute -bottom-[33%] left-0 lg:top-[25%] lg:left-0  lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 h-48">
            <CircleText />
          </div>
          <div className="overflow-hidden relative rounded-xl lg:rounded-none w-full">
           <img
              className="object-cover object-center rounded z-10"
              alt="hero"
              src={heroImage}
            />
            <div className="absolute -top-[5%] -left-[5%] -z-10 w-[512px] h-[512px] xl:w-[1280px] xl:h-[940px]">
              <AbstractWaves />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CircleText() {
  return (
    <div className="lg:w-[175px] lg:h-[175px] w-32 h-32 bg-gray-08 rounded-full border-2 border-gray-15 justify-center items-center  inline-flex overflow-hidden">
      <img
        src="src\assets\circle-text-mobile.png"
        alt=""
        className="block object-contain z-10 w-full h-full"
      />
    </div>

  );
}
