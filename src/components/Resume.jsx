// import { useState } from "react";
import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

export default function Resume() {
  return (
    <div className="Resume">
      <GeneralSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}
