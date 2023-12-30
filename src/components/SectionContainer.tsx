import { ReactNode } from "react";

type SectionContainerProp = {
  children: ReactNode;
};

export default function SectionContainer({ children }: SectionContainerProp) {
  return (
    <section className="2xl:max-w-[1600px] w-full mx-auto my-20 lg:my-[120px] lg:px-20 2xl:my-[150px]">
      {children}
    </section>
  );
}
