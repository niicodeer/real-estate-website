import CardContainer from "./CardContainer";

export type CardAchievmentProps = {
  title: string;
  text: string;
};
export default function CardAchievment({ title, text }: CardAchievmentProps) {
  return (
    <div className="shadow-[0px_0px_4px_rgba(150,150,150,0.5)] xl:shadow-[0px_0px_6px_rgba(150,150,150,0.5)] 2xl:shadow-[0px_0px_8px_rgba(150,150,150,0.5)] rounded-xl xl:flex-1">
    <CardContainer>
      <div className="text-white p-8 max-w-[512px] flex flex-col gap-4 justify-start items-start 2xl:min-h-[175px]">
        <h2 className="text-xl xl:text-2xl font-semibold">{title}</h2>
        <p className="text-sm xl:text-[16px] 2xl:text-base text-gray-60 font-medium">
          {text}
        </p>
      </div>
    </CardContainer>
    </div>
  );
}
