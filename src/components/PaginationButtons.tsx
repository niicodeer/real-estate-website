import PrevButton from './PrevButton'
import NextButton from './NextButton'
import { PaginationFooterProps } from './PaginationFooter'


export default function PaginationButtons({min, max, prev, next}:PaginationFooterProps) {
  return (
    <div className='flex gap-x-2.5 items-center justify-between'>
      <PrevButton disabled={min<=1} onClick={prev}/>
      <div className="lg:hidden inline-flex gap-x-1">
        <span className="text-white text-sm font-medium leading-[30px]">
          {min < 10 ? "0" + min : min}
        </span>
        <span className="text-gray-60 text-sm font-medium leading-[30px]">
          {" "}
          of {max[0] < 10 ? "0" + max[0] : max[0]}
        </span>
      </div>
      <NextButton disabled={min===max[0] || min+max[1]>max[0]} onClick={next} />
    </div>
  )
}
