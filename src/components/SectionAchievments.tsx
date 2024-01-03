import CardAchievment from "./CardAchievment";

export default function SectionAchievments() {
  return (
    <div className="flex flex-wrap gap-4 xl:gap-8 2xl:gap-10">
      <CardAchievment
        title="3+ Years of Excellence"
        text="With over 3 years in the industry, we've amassed a wealth of knowledge and experience."
      />
      <CardAchievment
        title="Happy Clients"
        text="Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
      />
      <CardAchievment
        title="Industry Recognition"
        text="We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
      />
    </div>
  );
}
