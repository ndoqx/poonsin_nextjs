import { Truck, Hammer, MessageSquare, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Hammer,
  MessageSquare,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? MessageSquare;

  return (
    <div className="p-8 border border-gray-700 rounded-2xl hover:border-gold transition duration-300 bg-gray-800/50 text-center">
      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-4 font-heading">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </div>
  );
}
