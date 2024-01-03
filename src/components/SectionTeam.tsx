import { members } from "../data/data";
import CardMember from "./CardMember";

export default function SectionTeam() {
  return (
    <div className="flex flex-wrap justify-between gap-y-5">
      {members.map((member, i) => (
        <CardMember
          key={i}
          image={member.image}
          twitter={member.twitter}
          name={member.name}
          ocuppation={member.ocuppation}
        />
      ))}
    </div>
  );
}
