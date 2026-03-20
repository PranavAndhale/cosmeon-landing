import { Hero } from "@/components/Hero";
import { EngineShowcase } from "@/components/EngineShowcase";
import { WorkspaceOrbs } from "@/components/WorkspaceOrbs";
import { BeforeAfter } from "@/components/BeforeAfter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Hero />
      <EngineShowcase />
      <WorkspaceOrbs />
      <BeforeAfter />
    </main>
  );
}
