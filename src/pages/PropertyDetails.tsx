import IconArea from "../assets/icons/IconArea";
import IconBath from "../assets/icons/IconBath";
import IconBed from "../assets/icons/IconBed";
import CardContainer from "../components/CardContainer";
import FeatureListItem from "../components/FeatureListItem";
import FormPricingDetails from "../components/FormPricingDetails";
import Paragraph from "../components/Paragraph";
import SectionContainer from "../components/SectionContainer";
import SectionFaqs from "../components/SectionFaqs";
import SectionHeader from "../components/SectionHeader";
import SectionPricingDetails from "../components/SectionPricingDetails";
import SeparatorLine from "../components/SeparatorLine";
import TitleH3 from "../components/TitleH3";

import IconLocation from "../assets/icons/IconLocation";
import SliderImage from "../components/SliderImage";

export default function PropertyDetails() {
  return (
    <>
      <div className="max-w-[1600px] p-4 xl:px-20 2xl:mx-auto 2xl:px-0 xl:pt-20 2xl:pt-32">
        <div className="flex flex-col gap-2.5 xl:gap-5 mb-7 xl:flex-row xl:items-center">
          <h1 className="text-white text-xl xl:text-2xl font-semibold leading-[150%] ">
            Seaside Serenity Villa
          </h1>
          <div className="flex gap-5 items-center xl:justify-between xl:w-[80%] 2xl:w-[83%]">
            <CardContainer>
              <div className="flex gap-1 items-center p-2 ">
                <div className="h-5">
                  <IconLocation color="white" />
                </div>
                <p className="text-white text-sm 2xl:text-lg">
                  Malibu, California
                </p>
              </div>
            </CardContainer>
            <div className="flex gap-1 items-center">
              <Paragraph text="Price: " />
              <p className="text-white text-lg xl:text-xl 2xl:text-2xl font-semibold ">
                $1,250,000
              </p>
            </div>
          </div>
        </div>

        <SliderImage />
        <div className="flex flex-col xl:flex-row gap-5">
          <CardContainer className="p-5 xl:p-10 xl:max-w-[50%] h-fit">
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-white text-lg lg:text-xl 2xl:text-2xl font-semibold leading-[150%] mb-1">
                  Description
                </h3>
                <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
                  Discover your own piece of paradise with the Seaside Serenity
                  Villa. T With an open floor plan, breathtaking ocean views
                  from every room, and direct access to a pristine sandy beach,
                  this property is the epitome of coastal living.
                </p>
              </div>
              <SeparatorLine />
              <div className="flex flex-col xl:flex-row">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2 w-36 xl:w-[170px] 2xl:[200px]">
                    <div className="flex gap-1">
                      <div className="h-5 2xl:h-6 text-gray-60">
                        <IconBed color="#999" />
                      </div>
                      <p className="text-gray-60 text-sm 2xl:text-lg ">
                        Bedrooms
                      </p>
                    </div>
                    <span className="text-white text-lg 2xl:text-2xl font-semibold">
                      04
                    </span>
                  </div>
                  <SeparatorLine vertical />
                  <div className="flex flex-col gap-2 w-36 ml-2.5">
                    <div className="flex gap-1">
                      <div className="h-5 2xl:h-6 text-gray-60">
                        <IconBath color="#999" />
                      </div>
                      <p className="text-gray-60 text-sm 2xl:text-lg ">
                        Bathrooms
                      </p>
                    </div>
                    <span className="text-white text-lg 2xl:text-2xl font-semibold">
                      04
                    </span>
                  </div>
                  <div className="hidden xl:flex">
                    <SeparatorLine vertical />
                    <div className="flex flex-col gap-2 ml-2.5">
                      <div className="flex gap-1">
                        <div className="h-5 2xl:h-6 text-gray-60">
                          <IconArea color="#999" />
                        </div>
                        <p className="text-gray-60 text-sm 2xl:text-lg ">
                          Area
                        </p>
                      </div>
                      <span className="text-white text-lg 2xl:text-2xl font-semibold">
                        2,500 Square Feet
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-5 xl:hidden">
                  <SeparatorLine />
                  <div className="flex flex-col gap-2 pt-5">
                    <div className="flex gap-1">
                      <div className="h-5 2xl:h-6 ">
                        <IconArea color="#999" />
                      </div>
                      <p className="text-gray-60 text-sm 2xl:text-lg">Area</p>
                    </div>
                    <span className="text-white text-lg 2xl:text-2xl font-semibold">
                      2,500 Square Feet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContainer>

          <CardContainer className="p-5 xl:p-10 xl:max-w-[50%]">
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-lg lg:text-xl 2xl:text-2xl font-semibold leading-[150%] mb-1">
                Key Features and Amenities
              </h3>
              <div className="flex flex-col gap-4">
                <FeatureListItem text="Expansive oceanfront terrace for outdoor entertaining" />
                <FeatureListItem text="Gourmet kitchen with top-of-the-line appliances" />
                <FeatureListItem text="Private beach access for morning strolls and sunset views" />
                <FeatureListItem text="Master suite with a spa-inspired bathroom and ocean-facing balcony" />
                <FeatureListItem text="Private garage and ample storage space" />
              </div>
            </div>
          </CardContainer>
        </div>
      </div>
      <SectionContainer>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="xl:max-w-[412px] 2xl:max-w-[520px]">
            <SectionHeader
              title="Inquire About Seaside Serenity Villa"
              text="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
              horizontal
            />
          </div>
          <FormPricingDetails />
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Comprehensive Pricing Details"
          text="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
        />
        <div className="flex flex-col gap-7 xl:gap-10">
          <div className=" w-full px-5 py-6 xl:py-5 xl:px-6 2xl:py-7 2xl:px-12 bg-gray-10 rounded-lg border border-gray-15 flex-col xl:flex-row justify-center xl:justify-start gap-2.5 xl:gap-4 inline-flex">
            <div className="text-white text-lg xl:text-xl 2xl:text-2xl font-semibold leading-[150%]">
              Note
            </div>
            <div className="xl:hidden">
              <SeparatorLine />
            </div>
            <div className="hidden xl:flex">
              <SeparatorLine vertical />
            </div>

            <div className="text-gray-60 text-sm xl:text-base 2xl:text-lg font-medium leading-[150%] self-center">
              The figures provided above are estimates and may vary depending on
              the property, location, and individual circumstances.
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-5 xl:gap-10">
            <div>
              <Paragraph text="Listing Price" />
              <TitleH3
                text="$1,250,000"
                classname="xl:text-3xl 2xl:text-[40px]"
              />
            </div>
            <SectionPricingDetails />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Frequently Asked Questions"
          text="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          buttonText="View All FAQ’s"
        />
        <SectionFaqs />
      </SectionContainer>
    </>
  );
}
