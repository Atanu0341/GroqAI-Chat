import { Zap, Cpu, MessageCircle } from "lucide-react"; 

// Feature card data with icons, title, and description
export const featureCardData = [
  {
    icon: Zap,
    iconProps: { className: "w-10 h-10 text-primary" },
    title: "Lightning Fast",
    description:
      "Experience near-instantaneous responses powered by GroqAI's cutting-edge technology.",
  },
  {
    icon: Cpu,
    iconProps: { className: "w-10 h-10 text-primary" },
    title: "Advanced AI",
    description:
      "Benefit from state-of-the-art language models that understand context and nuance.",
  },
  {
    icon: MessageCircle,
    iconProps: { className: "w-10 h-10 text-primary" },
    title: "Natural Conversations",
    description:
      "Engage in fluid, human-like conversations that feel natural and intuitive.",
  },
] as const;
