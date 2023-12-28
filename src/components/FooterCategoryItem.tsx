type FooterCategoryItemProps={
  href?: string,
  title:string
}

export default function FooterCategoryItem({href="#", title}:FooterCategoryItemProps) {
  return (
    <li>
      <a href={href} className="text-base text-white">{title}</a>
    </li>
  );
}
