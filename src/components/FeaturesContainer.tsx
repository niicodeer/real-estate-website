import { ReactNode } from "react"

type FeatureContainerProps={
  children: ReactNode;
}
export default function FeaturesContainer({children}:FeatureContainerProps) {
  return (
    <div className=" snap-start w-auto flex justify-center flex-wrap gap-2.5 2xl:gap-5 p-2.5 2xl:p-5 text-center border-y border-gray-15 shadow-[0px_0px_6px_rgba(150,150,150,0.5)] ">
      {children}
    </div>
  )
}
