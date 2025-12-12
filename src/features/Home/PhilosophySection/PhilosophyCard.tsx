import Card from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PhilosophyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function PhilosophyCard({ icon: Icon, title, description, index }: PhilosophyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <Card hover className="h-full text-center group">
        {/* Icon container */}
        <div
          className={cn(
            "w-16 h-16 mx-auto mb-6 rounded-2xl",
            "bg-gradient-to-br from-sand-200 to-clay-100",
            "flex items-center justify-center",
            "transition-all duration-500 group-hover:scale-110",
            "group-hover:shadow-soft"
          )}
        >
          <Icon className="w-7 h-7 text-stone-700" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="font-serif text-xl text-stone-800 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}


export default PhilosophyCard