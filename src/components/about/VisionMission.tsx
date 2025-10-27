import type { LucideIcon } from "lucide-react";
import { Rocket, Target } from "lucide-react";

interface VisionMissionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const cards: VisionMissionCardProps[] = [
  {
    title: "Our Vision",
    description: "To be the preferred global logistics partner through innovation, efficiency, and customer focus.",
    icon: Rocket,
  },
  {
    title: "Our Mission",
    description: "To deliver seamless, cost-effective, and sustainable logistics services, connecting businesses across continents.",
    icon: Target,
  },
];

export const VisionMission = () => {
  return (
    <section className="mt-16 w-full bg-gray-50 py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 md:flex-row">
        {cards.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="flex flex-1 flex-col gap-3 rounded-xl bg-white p-6 text-gray-700 shadow-sm"
          >
            <Icon className="h-6 w-6 text-brand-navy" />
            <h2 className="text-xl font-semibold text-brand-navy">{title}</h2>
            <p className="text-sm md:text-base">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;
