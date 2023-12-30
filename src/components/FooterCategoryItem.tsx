type FooterCategoryItemProps = {
  href?: string;
  title: string;
};

export default function FooterCategoryItem({
  href = "#",
  title,
}: FooterCategoryItemProps) {
  return (
    <li>
      <a
        href={href}
        className="text-sm lg:text-[16px] 2xl:text-base text-white"
      >
        {title}
      </a>
    </li>
  );
}
