import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { PaginationFooterProps } from "./PaginationFooter";

export default function PaginationButtons({
  min,
  max,
  prev,
  next,
  sticks,
}: PaginationFooterProps) {
  return (
    <>
      {sticks ? (
        <div className="w-[320px] h-[64px] p-2 bg-gray-08 rounded-full justify-between items-center inline-flex gap-8 xl:gap-3">
          <PrevButton disabled={min <= 1} onClick={prev} />
          <div className="flex w-full gap-2">
            {[...Array(max[0])].map((_, i) => (
              <div
                className={`flex-1 h-[3px] ${min == i+1 ? "bg-purple-60 ":" bg-gray-60"} rounded-[60px]`} 
                key={i}
              />
            ))}
            {/* <div className="grow shrink basis-0 h-[3px] bg-neutral-600 rounded-[60px]" /> */}
          </div>
          <NextButton
            disabled={min === max[0] || max[1] > max[0]}
            onClick={next}
          />
        </div>
      ) : (
        <div className="flex gap-x-2.5 items-center justify-between">
          <PrevButton disabled={min <= 1} onClick={prev} />
          <div className="lg:hidden inline-flex gap-x-1">
            <span className="text-white text-sm font-medium leading-[30px]">
              {min < 10 ? "0" + min : min}
            </span>
            <span className="text-gray-60 text-sm font-medium leading-[30px]">
              {" "}
              of {max[0] < 10 ? "0" + max[0] : max[0]}
            </span>
          </div>
          <NextButton
            disabled={min === max[0] || max[1] > max[0]}
            onClick={next}
          />
        </div>
      )}
    </>
  );
}
