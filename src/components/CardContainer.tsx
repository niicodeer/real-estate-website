import { ReactElement } from "react"

type CardContainerProp={
  children: ReactElement;
  className?: string
}
export default function CardContainer({children, className}:CardContainerProp) {
  return (
    <div className={`border border-gray-15 rounded-xl overflow-hidden w-auto ${className}`}>
      {children}
    </div>
  )
}
