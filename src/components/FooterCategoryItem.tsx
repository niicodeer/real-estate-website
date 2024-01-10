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
        className="text-sm lg:text-base 2xl:text-lg text-white"
      >
        {title}
      </a>
    </li>
  );
}
