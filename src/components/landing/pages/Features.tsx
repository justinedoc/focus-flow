import { featuresInfo } from "../constants/Features";
import FeaturesCard from "../ui/FeaturesCard";
import SectionHeader from "../ui/SectionHeader";
import heroOverlay from "../../../assets/images/hero-bg_2.png";
function Features() {
  return (
    <section
      id="features"
      className="bg-black text-white flex flex-col items-center __section-padding md:pb-10 relative"
    >
      <div className="absolute -top-40 left-0 z-10">
        <img src={heroOverlay} alt="Hero background" />
      </div>

      <SectionHeader
        title="Everything you need"
        description="
      Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
      />

      <main className="flex flex-wrap gap-4 mt-10 mb-3">
        {featuresInfo.map((info) => (
          <FeaturesCard key={info.title} features={info} />
        ))}
      </main>
    </section>
  );
}

export default Features;
