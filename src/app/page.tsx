import React from "react";
import Bio from "@/components/Bio";
import Projects from "@/components/Projects";
import ProjectRequestForm from "@/components/ProjectRequestForm";
import ScrollAppearNoJump from "@/components/ScrollFadeIn";

export default function HomePage() {
  return (
    <main>
      <ScrollAppearNoJump>
        <Bio />
      </ScrollAppearNoJump>

      <ScrollAppearNoJump>
        <Projects />
      </ScrollAppearNoJump>

      <ScrollAppearNoJump>
        <ProjectRequestForm />
      </ScrollAppearNoJump>
    </main>
  );
}
