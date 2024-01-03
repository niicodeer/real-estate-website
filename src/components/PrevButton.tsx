import IconLeftArrow from "../assets/icons/IconLeftArrow";
export type ButtonProp = {
  disabled?: boolean;
  onClick?: () => void;
};
export default function PrevButton({ disabled, onClick }: ButtonProp) {
  return (
    <button
      onClick={onClick}
      className={`w-11 lg:w-[58px] h-11 lg:h-[58px] p-2.5 lg:p-3.5 rounded-full ${
        disabled ? "bg-transparent " : "bg-gray-10 text-white"
      } border border-gray-15 justify-start items-start gap-2.5 inline-flex}`}
    >
      <IconLeftArrow disabled={disabled} />
    </button>
  );
}
