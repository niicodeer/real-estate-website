import CardSimpleBg from "./CardSimpleBg";
import Paragraph from "./Paragraph";
import TitleH3 from "./TitleH3";
import TitleH4 from "./TitleH4";

export default function PriceDetailItem({
  concept = "",
  price = "",
  text = "",
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <TitleH4 text={concept} />
      <div className="flex items-center gap-3">
        <TitleH3 text={price} />
        {text && (
          <CardSimpleBg classname="py-1.5 px-3">
            <Paragraph text={text} />
          </CardSimpleBg>
        )}
      </div>
    </div>
  );
}
