import FooterCategoryItem from "./FooterCategoryItem";

type FooterCategoryProps = {
  data: {
    category: string;
    links: string[];
  };
};

export default function FooterCategory({ data }: FooterCategoryProps) {
  return (
    <div className="flex w-1/2 lg:w-auto max-w-40 lg:max-w-52 mb-2.5 pl-5 border-l border-gray-15 -ml-5 mr-auto lg:pl-0 lg:border-none lg:-ml-0 lg:mr-0">
      <div className="w-[90%] lg:w-full border-b border-gray-15 pb-2.5 mt-5 mr-4 lg:mt-0 lg:mr-0 lg:border-none">
        <h2 className="title-font font-medium text-gray-60 tracking-widest text-base lg:text-lg 2xl:text-xl mb-3">
          {data.category}
        </h2>
        <nav className="list-none mb-2 flex flex-col gap-2 lg:gap-4">
          {data.links.map((link, i) => (
            <FooterCategoryItem title={link} key={i} />
          ))}
        </nav>
      </div>
    </div>
  );
}
