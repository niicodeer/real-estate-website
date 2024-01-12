import IconBox from "../assets/icons/IconBox";
import IconCalendar from "../assets/icons/IconCalendar";
import IconHouse from "../assets/icons/IconHouse";
import IconLocation from "../assets/icons/IconLocation";
import IconPrice from "../assets/icons/IconPrice";
import IconSearch from "../assets/icons/IconSearch";
import Button from "./Button";
import SelectInput from "./SelectInput";

export default function SectionFilters() {
  return (
    <section className="relative 2xl:max-w-[1600px] px-4 w-full mx-auto my-10 min-h-40 lg:px-20 2xl:px-0 ">
      <div className="xl:max-w-[1280px] 2xl:max-w-[1600px] xl:absolute xl:-top-[50%] xl:left-[50%] xl:-translate-x-[50%] flex flex-col gap-5 xl:gap-0 justify-center items-center w-full">
        <div className="bg-gray-10 p-1 md:p-2.5 rounded-xl xl:rounded-t-xl xl:rounded-b-none">
          <label className="w-full xl:w-[1100px] 2xl:w-[1300px] h-16 xl:h-20 2xl:h-[100px] px-6 py-5 bg-gray-08 rounded-lg xl:rounded-t-xl border border-gray-15 justify-start items-center gap-[50px] inline-flex">
            <input
              placeholder="Search a Property"
              className="flex-1 bg-transparent text-white text-base xl:text-lg 2xl:text-2xl font-medium leading-9 outline-gray-10 border-none"
            />
            <Button text="Find Property" primary icon={<IconSearch />} />
          </label>
        </div>

        <div className="bg-gray-10 p-2.5 flex flex-wrap gap-5 rounded-lg w-full">
          <SelectInput
            icon={<IconLocation />}
            id="locationFilter"
            placeholder="Location"
            options={[1, 2, 3, 4]}
            key={"locationFilter"}
          />
          <SelectInput
            icon={<IconHouse />}
            id="houseFilter"
            placeholder="Property Type"
            options={[1, 2, 3, 4]}
            key={"houseFilter"}
          />
          <SelectInput
            icon={<IconPrice />}
            id="priceFilter"
            placeholder="Pricing Range"
            options={[1, 2, 3, 4]}
            key={"priceFilter"}
          />
          <SelectInput
            icon={<IconBox />}
            id="sizeFilter"
            placeholder="Property Size"
            options={[1, 2, 3, 4]}
            key={"sizeFilter"}
          />
          <SelectInput
            icon={<IconCalendar />}
            id="yearFilter"
            placeholder="Build Year"
            options={[1, 2, 3, 4]}
            key={"yearFilter"}
          />
        </div>
      </div>
    </section>
  );
}
