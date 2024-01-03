import Button from "./Button";
import heroImage from "../assets/images/hero-image.png";
import AbstractWaves from "../assets/AbstractWaves";

export default function HeroSection() {
  return (
    <section className="text-white w-full 2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between 2xl:gap-24 lg:gap-24 gap-8 relative">
        <div className="xl:max-w-[610px] 2xl:max-w-[920px] w-full flex flex-col md:items-start mb-16 md:mb-0 2xl:pl-32 lg:pl-20 justify-center text-left">
          <h1 className="text-3xl 2xl:text-6xl lg:text-5xl mb-6 font-semibold text-white">
            Discover Your Dream
            <br className="lg:inline-block" />
            Property with Estatein
          </h1>
          <p className="mb-16 leading-relaxed lg:text-[16px] 2xl:text-base text-sm text-gray-60">
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
              <p className="leading-relaxed text-sm 2xl:text-base text-gray-60">
                Happy Customers
              </p>
            </div>
            <div className="py-4 px-4 2xl:px6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center">
              <h2 className="font-bold 2xl:text-4xl text-2xl text-white pb-1 2xl:leading-[60px]">
                10k+
              </h2>
              <p className="leading-relaxed text-sm 2xl:text-base text-gray-60">
                Properties For Clients
              </p>
            </div>
            <div className="py-4 px-4 2xl:px6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center">
              <h2 className="font-bold 2xl:text-4xl text-2xl text-white pb-1 2xl:leading-[60px]">
                16+
              </h2>
              <p className="leading-relaxed text-sm 2xl:text-base text-gray-60">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
        {/* leftSide */}
        <div className="relative xl:max-w-[610px] 2xl:max-w-[920px] w-full rounded-xl lg:rounded-none my-10 lg:my-0 bg-gray-10 z-0 self-end">
          <div className="absolute -bottom-[33%] left-0 lg:top-[25%] lg:left-0  lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 h-48">
            <CircleText />
          </div>
          <div className="overflow-hidden relative rounded-xl lg:rounded-none">
            <img
              className="object-cover object-center rounded z-10"
              alt="hero"
              src={heroImage}
            />
            <div className="absolute -top-[5%] -left-[5%] -z-10">
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
        src="src\assets\images\circle-text-mobile.png"
        alt=""
        className="block object-contain z-10 w-full h-full"
      />
    </div>

    /*     <div className="lg:w-[175px] lg:h-[175px] w-32 h-32 bg-gray-08 rounded-full border-2 border-gray-15 justify-center items-center  inline-flex relative z-0">
      <div className="lg:w-[144px] lg:h-[144px] w-24 h-24 z-20 relative">
        <div className="left-[89px] top-[140px] absolute origin-top-left rotate-[172.02deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          ✨
        </div>
        <div className="left-[66.43px] top-[143.66px] absolute origin-top-left rotate-[-171.37deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          D
        </div>
        <div className="left-[49.36px] top-[140.07px] absolute origin-top-left rotate-[-160.43deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          i
        </div>
        <div className="left-[40.53px] top-[136.56px] absolute origin-top-left rotate-[-151.52deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          s
        </div>
        <div className="left-[29.06px] top-[129.67px] absolute origin-top-left rotate-[-140.17deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          c
        </div>
        <div className="left-[17.77px] top-[119.32px] absolute origin-top-left rotate-[-127.61deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          o
        </div>
        <div className="left-[8.57px] top-[106.04px] absolute origin-top-left rotate-[-115.05deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          v
        </div>
        <div className="left-[2.74px] top-[91.87px] absolute origin-top-left rotate-[-102.50deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          e
        </div>
        <div className="left-[0.12px] top-[76.22px] absolute origin-top-left rotate-[-91.15deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          r
        </div>
        <div className="left-[0.42px] top-[64.23px] absolute origin-top-left rotate-[-82.24deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          {" "}
        </div>
        <div className="left-[2.23px] top-[53.58px] absolute origin-top-left rotate-[-71.30deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          Y
        </div>
        <div className="left-[8.57px] top-[37.63px] absolute origin-top-left rotate-[-57.93deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          o
        </div>
        <div className="left-[17.82px] top-[24.39px] absolute origin-top-left rotate-[-45.37deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          u
        </div>
        <div className="left-[28.84px] top-[14.30px] absolute origin-top-left rotate-[-34.44deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          r
        </div>
        <div className="left-[39.03px] top-[7.97px] absolute origin-top-left rotate-[-25.52deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          {" "}
        </div>
        <div className="left-[49px] top-[3.58px] absolute origin-top-left rotate-[-14.18deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          D
        </div>
        <div className="left-[66.39px] top-[0.21px] absolute origin-top-left -rotate-2 text-white text-[15.01px] font-semibold font-['Urbanist']">
          r
        </div>
        <div className="left-[78.94px] top-[0.27px] absolute origin-top-left rotate-[9.32deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          e
        </div>
        <div className="left-[94.82px] top-[3.69px] absolute origin-top-left rotate-[22.28deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          a
        </div>
        <div className="left-[110.02px] top-[10.69px] absolute origin-top-left rotate-[37.27deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          m
        </div>
        <div className="left-[125.36px] top-[23.96px] absolute origin-top-left rotate-[49.83deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
           
        </div>
        <div className="left-[131.91px] top-[32.31px] absolute origin-top-left rotate-[59.96deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          P
        </div>
        <div className="left-[138.73px] top-[45.61px] absolute origin-top-left rotate-[70.90deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          r
        </div>
        <div className="left-[142.37px] top-[57.62px] absolute origin-top-left rotate-[82.24deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          o
        </div>
        <div className="left-[143.76px] top-[73.81px] absolute origin-top-left rotate-[95.20deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          p
        </div>
        <div className="left-[141.49px] top-[89.89px] absolute origin-top-left rotate-[108.17deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          e
        </div>
        <div className="left-[135.77px] top-[104.69px] absolute origin-top-left rotate-[119.51deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          r
        </div>
        <div className="left-[129.30px] top-[115.01px] absolute origin-top-left rotate-[129.23deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          t
        </div>
        <div className="left-[121.03px] top-[124.33px] absolute origin-top-left rotate-[140.17deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
          y
        </div>
        <div className="left-[109.23px] top-[133.20px] absolute origin-top-left rotate-[150.30deg] text-white text-[15.01px] font-semibold font-['Urbanist']">
           
        </div>
      </div>
      <div className="lg:w-[80px] lg:h-[80px] w-14 h-14 bg-gray-10 rounded-full border-2 border-gray-15 z-10 absolute">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <IconUpRightArrow />
        </div>
      </div>
    </div> */
  );
}
