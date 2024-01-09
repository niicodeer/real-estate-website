import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import PaginationFooter from "../components/PaginationFooter";
import SectionContainer from "../components/SectionContainer";
import SectionFaqs from "../components/SectionFaqs";
import SectionHeader from "../components/SectionHeader";
import SectionProperties from "../components/SectionProperties";
import SectionTestimonials from "../components/SectionTestimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-[1920px] mt-1">
        <FeaturesSection />
      </div>
      <SectionContainer>
        <div className="w-full">
          <SectionHeader
            title="Featured Properties"
            text='Explore our handpicked selection of featured properties. Each listing
            offers a glimpse into exceptional homes and investments available
            through Estatein. Click "View Details" for more information.'
            buttonText="View All Properties"
          />
          {/* cards */}
          <SectionProperties />
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="What Our Clients Say"
          text="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          buttonText="View All Testimonials"
        />
        <SectionTestimonials />
        <PaginationFooter min={1} max={10} buttonText="View All Testimonials" />
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          title="Frequently Asked Questions"
          text="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          buttonText="View All FAQ’s"
        />
        <SectionFaqs />
        <PaginationFooter min={1} max={10} buttonText="View All FAQ’s" />
      </SectionContainer>
    </>
  );
}
