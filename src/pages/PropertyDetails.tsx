import IconArea from "../assets/icons/IconArea";
import IconBath from "../assets/icons/IconBath";
import IconBed from "../assets/icons/IconBed";
import IconLocation from "../assets/icons/IconLocation";
import Button from "../components/Button";
import CardContainer from "../components/CardContainer";
import CardSimpleBg from "../components/CardSimpleBg";
import FeatureListItem from "../components/FeatureListItem";
import Input from "../components/Input";
import Paragraph from "../components/Paragraph";
import PriceDetailItem from "../components/PriceDetailItem";
import SectionContainer from "../components/SectionContainer";
import SectionFaqs from "../components/SectionFaqs";
import SectionHeader from "../components/SectionHeader";
import SectionPricingDetails from "../components/SectionPricingDetails";
import SeparatorLine from "../components/SeparatorLine";
import TitleH3 from "../components/TitleH3";


export default function PropertyDetails() {
  return (
    <>
      <div>PropertyDetails</div>
      <div className="p-4 flex flex-col xl:flex-row gap-5">
        <CardContainer className="p-5 xl:p-10 xl:max-w-[50%] h-fit">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-white text-lg lg:text-xl 2xl:text-2xl font-semibold leading-[150%] mb-1">
                Description
              </h3>
              <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
                Discover your own piece of paradise with the Seaside Serenity
                Villa. T With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </p>
            </div>
            <SeparatorLine />
            <div className="flex flex-col xl:flex-row">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-36">
                  <div className="flex gap-1">
                    <div className="h-5 text-gray-60">
                      <IconBed color="#999" />
                    </div>
                    <p className="text-gray-60 text-sm">Bedrooms</p>
                  </div>
                  <span className="text-white text-lg font-semibold">04</span>
                </div>
                <SeparatorLine vertical />
                <div className="flex flex-col gap-2 w-36 ml-2.5">
                  <div className="flex gap-1">
                    <div className="h-5 text-gray-60">
                      <IconBath color="#999" />
                    </div>
                    <p className="text-gray-60 text-sm">Bathrooms</p>
                  </div>
                  <span className="text-white text-lg font-semibold">04</span>
                </div>
                <div className="hidden xl:flex">
                  <SeparatorLine vertical />
                  <div className="flex flex-col gap-2 ml-2.5">
                    <div className="flex gap-1">
                      <div className="h-5 text-gray-60">
                        <IconArea color="#999" />
                      </div>
                      <p className="text-gray-60 text-sm">Area</p>
                    </div>
                    <span className="text-white text-lg font-semibold">
                      2,500 Square Feet
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-5 xl:hidden">
                <SeparatorLine />
                <div className="flex flex-col gap-2 pt-5">
                  <div className="flex gap-1">
                    <div className="h-5 text-gray-60">
                      <IconArea color="#999" />
                    </div>
                    <p className="text-gray-60 text-sm">Area</p>
                  </div>
                  <span className="text-white text-lg font-semibold">
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
      <SectionContainer>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="xl:max-w-[412px] 2xl:max-w-[520px]">
            <SectionHeader
              title="Inquire About Seaside Serenity Villa"
              text="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
              horizontal
            />
          </div>
          <CardContainer className="p-5 xl:p-10 2xl:p-[50px] 2xl:gap-7 xl:max-w-[790px] 2xl:max-w-[984px]">
            <div className="flex flex-wrap gap-5 xl:gap-7 2xl:gap-12">
              <Input
                type="text"
                id="firstname"
                label="First Name"
                placeholder="Enter First Name"
                classname="xl:max-w-[48%] 2xl:max-w-[47%]  "
              />
              <Input
                type="text"
                id="lastname"
                label="Last Name"
                placeholder="Enter Last Name"
                classname="xl:max-w-[48%] 2xl:max-w-[47%] "
              />
              <Input
                type="email"
                id="email"
                label="Email"
                placeholder="Enter your Email"
                classname="xl:max-w-[48%] 2xl:max-w-[47%] "
              />
              <Input
                type="tel"
                id="phone"
                label="Phone"
                placeholder="Enter Phon Number"
                classname="xl:max-w-[48%] 2xl:max-w-[47%] "
              />
              <div className="flex flex-col gap-4 w-full ">
                <label
                  htmlFor="contactMethod"
                  className="text-white font-semibold 2xl:text-xl leading-[150%]"
                >
                  Selected Property
                </label>
                <div className="flex gap-4 flex-col">
                  <div className="relative ">
                    <input
                      className="h-14 2xl:h-16 w-full rounded-lg bg-gray-10 border border-gray-15 py-4 px-5 2xl:py-5 text-white 2xl:text-lg"
                      type="text"
                      name="location"
                      id="location"
                      value="Seaside Serenity Villa, Malibu, California"
                    ></input>
                    <div className="w-5 h-5 2xl:w-6 2xl:h-6 absolute top-[50%] -translate-y-[50%] right-5">
                      <IconLocation />
                    </div>
                  </div>
                </div>
              </div>
              <Input
                textarea
                id="message"
                label="Message"
                placeholder="Enter your Message here..."
                classname="xl:w-full xl:max-w-full 2xl:w-full 2xl:max-w-full xl:h-[150px] 2xl:h-[170px] overflow-y-auto outline-none"
              />
              {/* Terms & conditions */}
              <div className="flex flex-col gap-5 xl:flex-row xl:justify-between w-full">
                <div className="flex gap-4 justify-center items-center">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="opacity-0 absolute" // Utiliza opacity-0 en lugar de hidden
                  />
                  <label
                    id="label-check"
                    htmlFor="terms"
                    className="h-6 w-6 2xl:h-7 2xl:w-7 rounded border border-gray-15 flex items-center justify-center bg-gray-10 cursor-pointer transition duration-300" // Agrega la clase transition para animaciones suaves
                  >
                    {/* Icono para indicar que es un checkbox */}
                    <svg
                      className="w-4 h-4 text-transparent pointer-events-none"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </label>
                  <p className="text-gray-60 font-medium text-sm xl:text-base 2xl:text-lg">
                    I agree with{" "}
                    <a href="" className="underline">
                      {" "}
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="" className="underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
                <Button text="Send Your Message" primary />
              </div>
            </div>
          </CardContainer>
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Comprehensive Pricing Details"
          text="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
        />
        <div className="flex flex-col gap-7">
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
            <TitleH3 text="$1,250,000" classname="xl:text-3xl 2xl:text-5xl"/>
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
