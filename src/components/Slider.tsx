import { ReactElement, cloneElement, useEffect, useState } from "react";
import { CardClientsProps } from "../data/data";
import PaginationFooter from "./PaginationFooter";

type SliderProps = {
  data: CardClientsProps[]; // Ajusta el tipo según la estructura de tus datos
  children: ReactElement;
  elementsPerView?: number;
};
export default function Slider({ children, data, elementsPerView = 1 }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataSlice, setDataSlice] = useState<CardClientsProps[]>([]);

  useEffect(() => {
    const endIndex = currentIndex + elementsPerView;
    setDataSlice(data.slice(currentIndex, endIndex > data.length ? undefined : endIndex));
  }, [currentIndex, data, elementsPerView]);

  const handleNext = () => {
    currentIndex < data.length - 1 && setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    currentIndex > 0 && setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  
  return (
    <>
      <div className="w- h-full flex overflow-hidden">
        <div className="flex flex-row gap-8">
          {dataSlice.map((el, i) => (
            <div
              className={`${i < 2 ? "flex flex-1 xl:max-w-[50%]" : "hidden"} `}
              key={i}
            >
              {cloneElement(children as ReactElement, el)}
            </div>
          ))}
        </div>
      </div>
      <PaginationFooter
        min={currentIndex + 1}
        max={data.length}
        next={() => handleNext()}
        prev={() => handlePrev()}
      />
    </>
  );
}
