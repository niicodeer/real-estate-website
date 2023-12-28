type ButtonProps = {
  text: string;
  primary?: boolean;
  secondary?: boolean;
};

export default function Button({
  text,
  primary = false,
  secondary = false,
}: ButtonProps) {
  return (
    <>
      {primary ? (
        <button className="inline-flex items-center bg-purple-60 py-4 px-6 focus:outline-none hover:bg-purple-70 rounded-lg text-base text-white">
          {text}
        </button>
      ) : secondary ? (
        <button className="inline-flex items-center bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 focus:outline-none hover:bg-gray-10 rounded-lg text-base text-white">
          {text}
        </button>
      ) : (
        <button className="inline-flex items-center bg-transparent ring ring-inset ring-gray-15 py-4 px-6 focus:outline-none hover:bg-gray-10 rounded-lg text-base text-white">
          {text}
        </button>
      )}
    </>
  );
}
