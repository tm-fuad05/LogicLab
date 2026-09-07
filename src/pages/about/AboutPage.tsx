import AboutHeroSection from "./sections/AboutHeroSection";
import AboutMissionSection from "./sections/AboutMissionSection";
import AboutTechStackSection from "./sections/AboutTechStackSection";
import AboutAuthorSection from "./sections/AboutAuthorSection";

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 py-4 sm:py-6 font-poppins">
      {/* 1. Hero / Platform Intro Section */}
      <AboutHeroSection />

      {/* 2. Mission & Core Principles Section */}
      <AboutMissionSection />

      {/* 3. Tech Stack & Architecture Section */}
      <AboutTechStackSection />

      {/* 4. Creator & Open Source Links Section */}
      <AboutAuthorSection />
    </div>
  );
}
