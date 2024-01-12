import CardSimpleBg from "./CardSimpleBg";
import prop1 from "../assets/images/prop1.png";
import prop2 from "../assets/images/prop2.png";
import prop3 from "../assets/images/prop3.png";
import thumb1 from "../assets/thumb/thumb1.png";
import thumb2 from "../assets/thumb/thumb2.png";
import thumb3 from "../assets/thumb/thumb3.png";
import thumb4 from "../assets/thumb/thumb4.png";
import thumb5 from "../assets/thumb/thumb5.png";
import thumb6 from "../assets/thumb/thumb6.png";
import { useEffect, useState } from "react";
import PaginationButtons from "./PaginationButtons";

const propImages = {
  images: [prop1, prop2, prop3,prop1, prop2, prop3],
  thumbs: [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6],
};
export default function SliderImage({ elementsPerView = 2 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataSlice, setDataSlice] = useState<[]>([]);

  useEffect(() => {
    const endIndex = currentIndex + elementsPerView;
    setDataSlice(
      propImages.images.slice(
        currentIndex,
        endIndex > propImages.images.length ? undefined : endIndex
      )
    );
  }, [currentIndex, propImages.images, elementsPerView]);

  const handleNext = () => {
    currentIndex < propImages.images.length - 1 &&
      setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    currentIndex > 0 && setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <CardSimpleBg classname="p-5 xl:p-10 2xl:p-12 mb-5 2xl:mb-7">
      <div className="flex flex-col gap-5 2xl:gap-7 items-center w-full h-full ">
        <div className="flex flex-col gap-5 2xl:gap-7 xl:flex-col-reverse w-full items-center overflow-hidden">
          <div className="flex flex-row gap-8 justify-start w-full ">
            {dataSlice.map((el, i) => (
              <div
                className={`${
                  i < elementsPerView
                    ? "flex gap-7 flex-1 min-w-[300px] h-[250px] xl:h-[500px] xl:max-w-[50%] rounded-lg relative w-full justify-center"
                    : "hidden"
                } `}
                key={i}
              >
                <img
                  src={el}
                  alt="prop1"
                  className="block object-cover object-center h-auto w-full rounded-xl"
                  key={el}
                />
              </div>
            ))}
          </div>
          <div className="bg-gray-08 p-2.5 2xl:px-3 rounded-xl h-16 xl:h-24 flex gap-2.5 justify-center w-fit">
            {propImages.thumbs
              .slice(0, propImages.images.length)
              .map((el, i) => (
                <img
                  src={el}
                  alt="thumb1"
                  className={`block object-contain object-center h-full ${
                    currentIndex == i ? " opacity-100 " : " opacity-50 "
                  }`}
                />
              ))}
          </div>
        </div>
        <PaginationButtons
          min={currentIndex + 1}
          max={[propImages.images.length]}
          prev={handlePrev}
          next={handleNext}
          sticks
        />
      </div>
    </CardSimpleBg>
  );
}
