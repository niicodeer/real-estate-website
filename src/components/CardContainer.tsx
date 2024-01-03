import { ReactElement } from "react"

type CardContainerProp={
  children: ReactElement
}
export default function CardContainer({children}:CardContainerProp) {
  return (
    <div className="border border-gray-15 rounded-xl overflow-hidden w-auto">
      {children}
    </div>
  )
}
