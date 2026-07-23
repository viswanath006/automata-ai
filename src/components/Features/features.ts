export type FeatureCategory = "Compute" | "Integration" | "Performance" | "Security";

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: FeatureCategory;
  highlight?: string;
  accentColor: string;
  size: "large" | "medium" | "small";
}

export const featuresData: FeatureData[] = [
  {
    id: "f1",
    title: "Instant Edge Compute",
    description: "Deploy functions globally in 12 milliseconds. Our V8 isolates run your AI tasks without cold starts, ensuring absolute low-latency execution.",
    icon: "cube-16-solid",
    category: "Compute",
    highlight: "12ms Latency",
    accentColor: "var(--color-primary)",
    size: "large"
  },
  {
    id: "f2",
    title: "Universal Connectors",
    description: "Plug into any PostgreSQL, Redis, or GraphQL endpoint instantly.",
    icon: "link",
    category: "Integration",
    accentColor: "var(--color-secondary)",
    size: "small"
  },
  {
    id: "f3",
    title: "Real-time Analytics",
    description: "Stream logs and metrics without refreshing.",
    icon: "chart-pie",
    category: "Performance",
    accentColor: "var(--color-primary)",
    size: "small"
  },
  {
    id: "f4",
    title: "Automated Workflows",
    description: "Visually construct complex LLM pipelines and autonomous agents using our drag-and-drop node builder.",
    icon: "arrow-path",
    category: "Compute",
    highlight: "Visual Builder",
    accentColor: "var(--color-secondary)",
    size: "medium"
  },
  {
    id: "f5",
    title: "Secure by Default",
    description: "SOC2 compliant out of the box.",
    icon: "cog-8-tooth",
    category: "Security",
    accentColor: "var(--color-text-heading)",
    size: "small"
  }
];
