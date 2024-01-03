type SeparatorProps = {
  vertical?: boolean;
};
export default function SeparatorLine({ vertical }: SeparatorProps) {
  return vertical ? (
    <div className="w-0 h-full border border-gray-15"></div>
  ) : (
    <div className="w-full h-0 border border-gray-15"></div>
  );
}
