import IconBars from "../assets/icons/IconBars";
import IconCircularCake from "../assets/icons/IconCircularCake";
import IconDB from "../assets/icons/IconDB";
import IconFlame from "../assets/icons/IconFlame";
import IconMagic from "../assets/icons/IconMagic";
import IconSpeaker from "../assets/icons/IconSpeaker";
import IconSpotlight from "../assets/icons/IconSpotlight";
import IconSubtract from "../assets/icons/IconSubtract";
import IconSun from "../assets/icons/IconSun";
import IconUnion from "../assets/icons/IconUnion";
import CardService from "../components/CardService";
import CardWithAbstractBg from "../components/CardWithAbstractBg";
import FeaturesSection from "../components/FeaturesSection";
import GradientHero from "../components/GradientHero";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";

export default function Services() {
  return (
    <>
      <GradientHero
        title="Elevate Your Real Estate Experience"
        text="Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams."
      />
      <div className="max-w-[1920px] mt-1 2xl:mx-auto">
        <FeaturesSection />
      </div>
      <SectionContainer>
        <SectionHeader
          title="Unlock Property Value"
          text="Selling your property should be a rewarding experience, and at Estatein, we make sure it is."
        />
        <div className="flex gap-5 2xl:gap-8 flex-col xl:flex-wrap xl:flex-row justify-between">
          <CardService
            title="Valuation Mastery"
            text="Discover the true worth of your property with our expert valuation services."
          >
            <IconBars />
          </CardService>

          <CardService
            title="Strategic Marketing"
            text="Selling a property requires more than just a listing; it demands a strategic marketing."
          >
            <IconCircularCake />
          </CardService>

          <CardService
            title="Negotiation Wizardry"
            text="Negotiating the best deal is an art, and our negotiation experts are masters of it."
          >
            <IconDB />
          </CardService>

          <CardService
            title="Closing Success"
            text="A successful sale is not complete until the closing. We guide you through the intricate closing process."
          >
            <IconSpeaker />
          </CardService>
          <CardWithAbstractBg
            title="Unlock the Value of Your Property Today"
            text="Ready to unlock the true value of your property? Explore our Property
              Selling Service categories and let us help you achieve the best deal
              possible for your valuable asset."
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader
          title="Effortless Property Management"
          text="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership."
        />
        <div className="flex gap-5 2xl:gap-8 flex-col xl:flex-wrap xl:flex-row justify-between">
          <CardService
            title="Tenant Harmony"
            text="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
          >
            <IconUnion />
          </CardService>

          <CardService
            title="Maintenance Ease"
            text="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
          >
            <IconSubtract />
          </CardService>

          <CardService
            title="Financial Peace of Mind"
            text="Managing property finances can be complex. Our financial experts take care of rent collection"
          >
            <IconMagic />
          </CardService>

          <CardService
            title="Legal Guardian"
            text="Stay compliant with property laws and regulations effortlessly."
          >
            <IconSun />
          </CardService>
          <CardWithAbstractBg
            title="Experience Effortless Property Management"
            text="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-x-[40px] 2xl:gap-x-[50px] items-center">
          <div className="w-full xl:max-w-[400px] 2xl:max-w-[520px] flex flex-col xl:gap-12 2xl:gap-[50px]">
            <SectionHeader
              title="Smart Investments, Informed Decisions"
              text="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
              horizontal
            />
            <CardWithAbstractBg
              title="Unlock Your Investment Potential"
              text="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
              vertical
            />
          </div>
          <div className="flex gap-2.5 flex-col xl:flex-wrap xl:flex-row bg-gray-10 p-2.5 rounded-xl">
            <CardService
              title="Market Insight"
              text="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
            >
              <IconBars />
            </CardService>

            <CardService
              title="ROI Assessment"
              text="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
            >
              <IconFlame />
            </CardService>

            <CardService
              title="Customized Strategies"
              text="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
            >
              <IconSpotlight />
            </CardService>

            <CardService
              title="Diversification Mastery"
              text="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
            >
              <IconSun />
            </CardService>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
