import RoadmapHeroSection from "./sections/RoadmapHeroSection";
import RoadmapMilestonesSection from "./sections/RoadmapMilestonesSection";
import ChangelogTimelineSection from "./sections/ChangelogTimelineSection";

export default function RoadmapPage() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 py-4 sm:py-6 font-poppins">
      {/* 1. Header Hero Section */}
      <RoadmapHeroSection />

      {/* 2. Upcoming Milestones & Strategic Roadmap */}
      <RoadmapMilestonesSection />

      {/* 3. Release History & Changelog Timeline */}
      <ChangelogTimelineSection />
    </div>
  );
}
