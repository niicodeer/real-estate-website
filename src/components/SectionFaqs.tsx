import { faqs } from "../data/data"
import CardFaq from "./CardFaq"

export default function SectionFaqs() {
  return (
    <div className="flex flex-wrap justify-between">
    {faqs.map((faq,i)=>
    <CardFaq key={i} faq={faq}/>
    )}
    
  </div>
  )
}
