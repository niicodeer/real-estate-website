import IconBed from "../assets/icons/IconBed";
import IconBath from "../assets/icons/IconBath";
import IconPlace from "../assets/icons/IconPlace";

type AmmenityBadgProps = {
  bed?: string;
  bath?: string;
  place?: string;
  epigraph?:string;
};
export default function AmmenityBadge({ bed, bath, place, epigraph }: AmmenityBadgProps) {
  return (
    <span className={`${epigraph ? "pl-3 " :"pl-10 "} pr-3 py-2 rounded-3xl bg-gray-10 border border-gray-15 text-white text-sm 2xl:text-base font-medium relative`}>
      <div className={`h-5 xl:h-6 absolute ${epigraph ? "" : "left-3"}`}>
        {bed ? <IconBed /> : bath ? <IconBath /> : place ? <IconPlace />: null}
      </div>
      {bed || bath || place || epigraph}
    </span>
  );
}
