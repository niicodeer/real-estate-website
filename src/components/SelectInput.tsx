import { ReactElement } from "react";
import { InputProps } from "./Input";
import SeparatorLine from "./SeparatorLine";

type SelectProps = {
  icon: ReactElement;
};

export default function SelectInput({
  id,
  options,
  placeholder,
  icon,
}: InputProps & SelectProps) {
  const className =
    "h-14 2xl:h-[72px] w-full  rounded-lg bg-gray-08 border border-gray-15 py-4 px-5 2xl:py-5 text-white 2xl:text-base";

  return (
    <div className="content-select relative xl:max-w-[232px] 2xl:max-w-[300px] w-full">
      <div className="absolute top-[50%] -translate-y-[50%] left-5 h-5 6 2xl:h-6 flex gap-2.5">
        {icon}
        <SeparatorLine vertical />
      </div>
      <select name={id} id={id} className={"pl-16 " + className}>
        <option value={placeholder} >{placeholder}</option>
        {options?.map((option) => (
          <option value={option} className="max-w-[232px]">{option}</option>
        ))}
      </select>
      <div className="absolute top-[50%] -translate-y-[50%] right-5 h-3 w-3 border-l border-white border-b -rotate-45 "></div>
    </div>
  );
}
