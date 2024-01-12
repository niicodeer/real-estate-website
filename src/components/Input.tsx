export type InputProps = {
  id: string;
  type?: string;
  placeholder: string;
  label?: string;
  select?: boolean;
  options?: string[] | number[];
  textarea?: true;
  classname?: string;
};

export default function Input({
  id,
  label,
  placeholder,
  type,
  select,
  textarea,
  options,
  classname,
  ...props
}: InputProps) {
  const className =
    "h-14 2xl:h-16 w-full rounded-lg bg-gray-10 border border-gray-15 py-4 px-5 2xl:py-5 text-white 2xl:text-lg";
  return (
    <div
      className={`flex flex-col gap-4 w-full xl:max-w-[270px] 2xl:max-w-[310px] ${classname}`}
    >
      {label && (
        <label
          htmlFor={id}
          className="flex flex-col gap-4 max-w-xs text-white font-semibold 2xl:text-xl leading-[150%]"
        >
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          name={id}
          id={id}
          className={ classname + className}
          placeholder={placeholder}
        ></textarea>
      ) : select ? (
        <div className="content-select relative">
          <select name={id} id={id} className={className + "appearance-none "}>
            <option value={placeholder}>{placeholder}</option>
            {options?.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
          <div className="absolute top-[50%] -translate-y-[50%] right-5 h-3 w-3 border-l border-white border-b -rotate-45 "></div>
        </div>
      ) : (
        <input
          {...props}
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          className={className}
        />
      )}
    </div>
  );
}
