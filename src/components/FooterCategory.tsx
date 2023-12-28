import FooterCategoryItem from "./FooterCategoryItem";

type FooterCategoryProps = {
  data: {
    category: string;
    links: string[];
  };
}

export default function FooterCategory({ data }: FooterCategoryProps) {
  return (
    <div className="flex flex-col md:w-1/5 w-full px-4">
      <h2 className="title-font font-medium text-gray-60 tracking-widest text-[20px] mb-3">
        {data.category}
      </h2>
      <nav className="list-none mb-2 flex flex-col gap-4">
        {data.links.map((link, i) => (
          <FooterCategoryItem title={link} key={i} />
        ))}
      </nav>
    </div>
  );
}
