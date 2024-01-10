import { IconProp } from "./IconBed";

export default function IconThunder({color}:IconProp) {
  return (
    <svg
      width="auto"
      height="auto"
      viewBox="0 0 21 21"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.875 11.75L12.625 2.375L10.75 9.25H17.625L8.875 18.625L10.75 11.75H3.875Z"
        stroke={color || "#999999"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
