import IconThunder from "../assets/icons/IconThunder";


export default function FeatureListItem({text=""}) {
  return (
    <div className="px-3 py-2.5 bg-gradient-to-r from-gray-10 border-l border-purple-60 justify-start items-center gap-2.5 inline-flex">
      <div className="w-6">
        <IconThunder color="white" />
      </div>
      <div className="text-gray-60 text-sm xl:text-base 2xl-text-lg font-medium leading-[150%]">
        {text}
      </div>
    </div>
  );
}
