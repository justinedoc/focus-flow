import { featuresInfo } from "../constants/Features";
import FeaturesCard from "../ui/FeaturesCard";
import SectionHeader from "../ui/SectionHeader";

function Features() {
  return (
    <section
      id="features"
      className="bg-black text-white flex flex-col items-center __section-padding md:pb-10"
    >
      <SectionHeader
        title="Everything you need"
        description="
      Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
      />

      <main className="flex flex-wrap gap-4 mt-10 mb-3">
        {featuresInfo.map((info) => (
          <FeaturesCard features={info} />
        ))}
      </main>
    </section>
  );
}

export default Features;
