import { DeveloperCard } from "@/components/DeveloperCard";
import { devData } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Content container with higher z-index */}
      <div className="relative z-10 isolate">
        {/* Developer Card with Glassmorphism */}
        <DeveloperCard data={devData} />
      </div>
    </div>
  );
}
