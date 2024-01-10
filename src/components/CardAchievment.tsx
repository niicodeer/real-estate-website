import CardContainerShadow from "./CardContainerShadow";

export type CardAchievmentProps = {
  title: string;
  text: string;
};
export default function CardAchievment({ title, text }: CardAchievmentProps) {
  return (
    <CardContainerShadow rounded>
      <div className="text-white p-8 max-w-[512px] flex flex-col gap-4 justify-start items-start 2xl:min-h-[175px]">
        <h2 className="text-xl xl:text-2xl font-semibold">{title}</h2>
        <p className="text-sm xl:text-base 2xl:text-lg text-gray-60 font-medium">
          {text}
        </p>
      </div>
    </CardContainerShadow>
  );
}
