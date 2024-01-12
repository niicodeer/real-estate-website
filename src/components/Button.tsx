import { ReactElement } from "react";

type ButtonProps = {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  icon?: ReactElement;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  text,
  primary = false,
  secondary = false,
  icon,
  className,
  onClick,
}: ButtonProps) {
  return (
    <>
      {primary ? (
        <button
          onClick={onClick}
          className={`inline-flex gap-2 justify-center items-center bg-purple-60 py-3 2xl:py-4 px-5 2xl:px-6 focus:outline-none hover:bg-purple-70 rounded-lg text-sm 2xl:text-lg text-white ${className}`}
        >
          {icon && <div className="2xl:h-6 h-5">{icon}</div>}
          <p className={`${icon && "hidden xl:block"}`}>{text}</p>
        </button>
      ) : secondary ? (
        <button
          onClick={onClick}
          className={`inline-flex justify-center items-center bg-gray-10 border-2 border-inset border-gray-15 py-3 2xl:py-4 px-5 2xl:px-6 focus:outline-none hover:bg-gray-15 rounded-lg text-sm 2xl:text-lg text-white ${className}`}
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`inline-flex justify-center items-center bg-transparent border-2 border-inset border-gray-15 py-3 2xl:py-4 px-5 2xl:px-6 focus:outline-none hover:bg-gray-10 rounded-lg text-sm 2xl:text-lg text-white ${className}`}
        >
          {text}
        </button>
      )}
    </>
  );
}
