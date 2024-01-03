import { ReactNode } from "react"

type FeatureContainerProps={
  children: ReactNode;
}
export default function FeaturesContainer({children}:FeatureContainerProps) {
  return (
    <div className=" snap-start w-auto flex flex-wrap text-center border-2 border-gray-15 rounded-xl shadow-[0px_0px_6px_rgba(150,150,150,0.5)] ">
      {children}
    </div>
  )
}
