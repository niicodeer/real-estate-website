import Button from "./Button";
import PaginationButtons from "./PaginationButtons";
export type PaginationFooterProps = {
  min: number;
  max: number[];
  buttonText?: string;
  next?:()=>void;
  prev?:()=>void;
};
export default function PaginationFooter({
  min,
  max,
  buttonText = "",
  next,
  prev,
}: PaginationFooterProps) {
  return (
    <div className="flex justify-between border-t border-gray-15 py-4 lg:py-5 mt-7 lg:mt-12">
      <div className="hidden lg:inline-flex gap-x-2">
        <span className="text-white text-xl font-medium leading-[30px]">
          {min < 10 ? "0" + min : min}
        </span>
        <span className="text-gray-60 text-xl font-medium leading-[30px]">
          {" "}
          of {max[0] < 10 ? "0" + max[0] : max[0]}
        </span>
      </div>
      {buttonText ? (
        <>
          <div className="lg:hidden inline-flex">
            <Button text={buttonText} secondary />
          </div>
          <PaginationButtons min={min} max={max} next={next} prev={prev}/>
        </>
      ) : (
        <div className="w-full xl:w-auto">
          <PaginationButtons min={min} max={max} next={next} prev={prev}/>
        </div>
      )}
    </div>
  );
}
