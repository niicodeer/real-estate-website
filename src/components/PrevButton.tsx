import IconLeftArrow from "../assets/icons/IconLeftArrow";
type ButtonProp={
  disabled?: boolean,
}
export default function PrevButton({disabled}:ButtonProp) {
  return (
    <div className={`w-[58px] h-[58px] p-3.5 rounded-full ${disabled ? "bg-transparent " :"bg-gray-10 text-white" } border border-gray-15 justify-start items-start gap-2.5 inline-flex}`}>
      <IconLeftArrow disabled={disabled} />
    </div>
  );
}
