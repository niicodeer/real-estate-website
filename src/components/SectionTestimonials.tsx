import CardTestimonial from "./CardTestimonial";
import { testimonials } from "../data/data";
import Slider from "./Slider";

export default function SectionTestimonials() {
  return (
    <Slider data={testimonials} buttonText="View All Testimonials" elementsPerView={3} >
      <CardTestimonial />
    </Slider>
/*     <div className="flex flex-wrap justify-between">
      {testimonials.map((testimonial,i)=>
      <CardTestimonial key={i} data={testimonial}/>
      )}
      
    </div> */
  )
}
