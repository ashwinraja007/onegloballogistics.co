import type { LucideIcon } from "lucide-react";
import { Rocket, Target } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {cards.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy/80 p-10 text-white shadow-xl"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-white/20 p-4">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/90">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
