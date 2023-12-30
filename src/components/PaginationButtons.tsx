import PrevButton from './PrevButton'
import NextButton from './NextButton'
import { PaginationFooterProps } from './PaginationFooter'


export default function PaginationButtons({min, max}:PaginationFooterProps) {
  return (
    <div className='flex gap-x-2.5 items-center '>
      <PrevButton disabled />
      <div className="lg:hidden inline-flex gap-x-1">
        <span className="text-white text-sm font-medium leading-[30px]">
          {min < 10 ? "0" + min : min}
        </span>
        <span className="text-gray-60 text-sm font-medium leading-[30px]">
          {" "}
          of {max}
        </span>
      </div>
      <NextButton />
    </div>
  )
}
