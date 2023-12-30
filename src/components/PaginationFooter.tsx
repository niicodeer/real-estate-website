import Button from "./Button";
import PaginationButtons from "./PaginationButtons";
export type PaginationFooterProps = {
  min: number;
  max: number;
  buttonText?: string;
};
export default function PaginationFooter({ min, max, buttonText="" }: PaginationFooterProps) {
  return (
    <div className="flex justify-between border-t border-gray-15 py-4 lg:py-5 mt-7 lg:mt-12">
      <div className="hidden lg:inline-flex gap-x-2">
        <span className="text-white text-xl font-medium leading-[30px]">
          {min < 10 ? "0" + min : min}
        </span>
        <span className="text-gray-60 text-xl font-medium leading-[30px]">
          {" "}
          of {max}
        </span>
      </div>
      <div className="lg:hidden inline-flex">
        <Button text={buttonText} secondary />
      </div>
      <PaginationButtons min={min} max={max}/>
    </div>
  );
}
