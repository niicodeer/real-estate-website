type ButtonProps = {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  className?:string;
};

export default function Button({
  text,
  primary = false,
  secondary = false,
  className
}: ButtonProps) {
  return (
    <>
      {primary ? (
        <button className={`inline-flex justify-center items-center bg-purple-60 py-3 2xl:py-4 px-5 2xl:px-6 focus:outline-none hover:bg-purple-70 rounded-lg text-sm 2xl:text-base text-white ${className}`}>
          {text}
        </button>
      ) : secondary ? (
        <button className={`inline-flex justify-center items-center bg-gray-08 border-2 border-inset border-gray-15 py-3 2xl:py-4 px-5 2xl:px-6 focus:outline-none hover:bg-gray-10 rounded-lg text-sm 2xl:text-base text-white ${className}`}>
          {text}
        </button>
      ) : (
        <button className={`inline-flex justify-center items-center bg-transparent border-2 border-inset border-gray-15 py-3 2xl:py-4 px-5 2xl:px-6 focus:outline-none hover:bg-gray-10 rounded-lg text-sm 2xl:text-base text-white ${className}`}>
          {text}
        </button>
      )}
    </>
  );
}
