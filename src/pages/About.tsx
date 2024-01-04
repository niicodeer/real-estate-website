import AbstractWaves from "../assets/AbstractWaves";
import SectionHeader from "../components/SectionHeader";
import heroImage from "../assets/images/about-hero.png";
import SectionContainer from "../components/SectionContainer";
import SectionValues from "../components/SectionValues";
import SectionAchievments from "../components/SectionAchievments";
import SectionSteps from "../components/SectionSteps";
import SectionTeam from "../components/SectionTeam";
import SectionClients from "../components/SectionClients";

export default function About() {
  return (
    <>
      <section className="2xl:max-w-[1600px] mx-auto text-white w-full xl:px-20 xl:mt-[70px] 2xl:px-0">
        <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between 2xl:gap-20 lg:gap-x-[60px] gap-8 relative">
          <div className="xl:max-w-[610px] 2xl:max-w-[920px] w-full flex flex-col md:items-start xl:mb-16 md:mb-0 justify-center text-left xl:gap-y-12">
            <SectionHeader
              horizontal
              title="Our Journey"
              text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            />
            {/* Stats */}
            <div className="container flex flex-wrap justify-between gap-3">
              <div className="p-4 xl:p-5 2xl:p-6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center xl:text-left">
                <h2 className="font-bold 2xl:text-4xl text-2xl text-white pb-1 2xl:leading-[60px]">
                  200+
                </h2>
                <p className="leading-relaxed text-sm 2xl:text-base text-gray-60">
                  Happy Customers
                </p>
              </div>
              <div className="p-4 xl:p-5 2xl:p-6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center xl:text-left">
                <h2 className="font-bold 2xl:text-4xl text-2xl text-white pb-1 2xl:leading-[60px]">
                  10k+
                </h2>
                <p className="leading-relaxed text-sm 2xl:text-base text-gray-60">
                  Properties For Clients
                </p>
              </div>
              <div className="p-4 xl:p-5 2xl:p-6 ring-2 ring-inset ring-gray-15 rounded-xl lg:max-w-56 min-w-40 flex-1 text-center xl:text-left">
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
          <div className="relative xl:max-w-[610px] 2xl:max-w-[920px] 2xl:h-[546px] w-full rounded-xl my-10 lg:my-0 bg-gray-10 z-0 self-end border border-gray-15">
            <div className="overflow-hidden relative rounded-xl w-full h-full">
              <img
                className="object-cover object-center rounded z-10 h-[310px] xl:h-auto"
                alt="hero"
                src={heroImage}
              />
              <div className="absolute -top-[5%] -left-[5%] xl:top-0 xl:left-0 -z-10 h-[420px] xl:h-full w-full">
                <AbstractWaves />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionContainer>
        <div className="xl:flex gap-x-[60px] 2xl:gap-x-20 items-center">
          <div className="xl:w-2/5">
            <SectionHeader
              title="Our Values"
              text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
              horizontal
            />
          </div>
          <SectionValues />
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader
          title="Our Achievements"
          text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        />
        <SectionAchievments />
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Navigating the Estatein Experience"
          text="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        />
        <SectionSteps />
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Meet the Estatein Team"
          text="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        />
        <SectionTeam />
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Our Valued Clients"
          text="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        />
        <SectionClients />
      </SectionContainer>
    </>
  );
}
