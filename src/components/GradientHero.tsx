type GradientHeroProps={
  title:string;
  text:string;
}
export default function GradientHero({title, text}:GradientHeroProps) {
  return (
    <section className="text-white bg-gradient-to-r from-gray-15 to-[30%] border border-y border-gray-15">
      <div className="max-w-[1920px] 2xl:mx-auto px-4 py-12 xl:pl-20 xl:pr-48 xl:py-24 2xl:pl-40 2xl:pr-[400px] 2xl:pt-[150px] flex flex-col gap-2.5 2xl:gap-4">
        <div className="text-3xl xl:text-[38px] 2xl:text-5xl font-semibold leading-[42px]">
          {title}
        </div>
        <div className="text-gray-60 text-sm xl:text-[16px] 2xl:text-base font-medium leading-[150%]">
          {text}
        </div>
      </div>
    </section>
  );
}
