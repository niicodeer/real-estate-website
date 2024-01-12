import { ReactElement, cloneElement, useEffect, useState } from "react";
import PaginationFooter from "./PaginationFooter";

type SliderProps<T>= {
  data: T[]; 
  children: ReactElement;
  elementsPerView?: number;
  buttonText?:string
};
export default function Slider<T>({ children, data, elementsPerView = 1, buttonText }: SliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataSlice, setDataSlice] = useState<T[]>([]);

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
      <div className="w-full h-full flex overflow-hidden">
        <div className="flex flex-row gap-8 justify-start">
          {dataSlice.map((el, i) => (
            <div
              className={`${i < elementsPerView ? "flex flex-1 " : "hidden"} `}
              /* className={`${i < elementsPerView ? "flex flex-1 w-auto xl:max-w-[50%]" : "hidden"} `} */
              key={i}
            >
              
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {cloneElement(children as ReactElement, { ...el } as never)}
            </div>
          ))}
        </div>
      </div>
      <PaginationFooter
        min={(currentIndex + 1) }
        max={[data.length, elementsPerView]}
        next={() => handleNext()}
        prev={() => handlePrev()}
        buttonText={buttonText}
      />
    </>
  );
}
