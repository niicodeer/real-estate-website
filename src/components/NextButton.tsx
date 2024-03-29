import IconRightArrow from "../assets/icons/IconRightArrow";
import { ButtonProp } from "./PrevButton";

export default function NextButton({disabled=false, onClick}:ButtonProp) {
  return (
    <button disabled={disabled} onClick={onClick} className={`w-11 lg:w-[58px] h-11 lg:h-[58px] p-2.5 lg:p-3.5 rounded-full ${disabled ? "bg-transparent " :"bg-gray-10 text-white" } border border-gray-15 justify-start items-start gap-2.5 inline-flex}`}>
      <IconRightArrow disabled={disabled} />
    </button>
  );
}
