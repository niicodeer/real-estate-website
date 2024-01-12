import CardStep from "./CardStep";
import { steps } from "../data/data";

export default function SectionSteps() {
  return (
    <div className="flex gap-8 xl:gap-x-5 xl:gap-y-10 flex-wrap">
      {steps.map((step, i) =>
        i < 3 ? (
          <div className="flex xl:flex-1 xl:min-w-[400px] " key={i}>
            <CardStep
              number={step.number}
              title={step.title}
              text={step.text}
              key={step.number}
            />
          </div>
        ) : (
          <div className="hidden xl:flex flex-1 xl:min-w-[400px] " key={i}>
            <CardStep
              number={step.number}
              title={step.title}
              text={step.text}
              key={step.number}
            />
          </div>
        )
      )}
    </div>
  );
}
