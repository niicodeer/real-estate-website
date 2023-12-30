import CardTestimonial from "./CardTestimonial";
import { testimonials } from "../data/data";

export default function SectionTestimonials() {
  return (
    <div className="flex flex-wrap justify-between">
      {testimonials.map((testimonial,i)=>
      <CardTestimonial key={i} data={testimonial}/>
      )}
      
    </div>
  )
}
