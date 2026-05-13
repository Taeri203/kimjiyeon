import { medicalRoadmap } from "@/data/medical";
import { RoadmapStepCard } from "@/components/cards/RoadmapStepCard";

export function MedicalRoadmap() {
  return <div className="grid gap-5 lg:grid-cols-3">{medicalRoadmap.map((step) => <RoadmapStepCard key={step.step} step={step} />)}</div>;
}
