import PrevButton from './PrevButton'
import NextButton from './NextButton'

export default function PaginationButtons() {
  return (
    <div className='flex gap-x-2.5'>
      <PrevButton disabled />
      <NextButton />
    </div>
  )
}
