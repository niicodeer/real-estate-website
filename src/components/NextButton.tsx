import IconRightArrow from "./IconRightArrow";

type ButtonProp={
  disabled?: boolean,
}
export default function NextButton({disabled=false}:ButtonProp) {
  return (
    <div className={`w-[58px] h-[58px] p-3.5 rounded-full ${disabled ? "bg-transparent " :"bg-gray-10 text-white" } border border-gray-15 justify-start items-start gap-2.5 inline-flex}`}>
      <IconRightArrow disabled={disabled} />
    </div>
  );
}
