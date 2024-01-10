import GradientHero from "../components/GradientHero";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import SectionProperties from "../components/SectionProperties";
import SectionFilters from "../components/SectionFilters";
import Form from "../components/Form";

export default function Properties() {
  return (
    <>
      <GradientHero
        title="Find Your Dream Property"
        text="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey."
      />
      <SectionFilters />
      <SectionContainer>
        <div className="w-full">
          <SectionHeader
            title="Discover a World of Possibilities"
            text="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home."
          />
          {/* cards */}
          <SectionProperties />
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Let's Make it Happen"
          text="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        />
        <Form className="p-5 xl:p-12 2xl:p-[100px]"/>
      </SectionContainer>
    </>
  );
}
