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
      <div className="absolute md:-top-36 top-[-6.5rem] left-0 z-10 w-full">
        <img src={heroOverlay} alt="Hero background" className="w-[40rem] md:w-full h-[7rem]" />
      </div>

      <SectionHeader
        title="Everything you need"
        description="
      Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
      />

      <main className="grid xl:grid-cols-3 grid-cols-1 gap-4 mt-10 mb-3">
        {featuresInfo.map((info) => (
          <FeaturesCard key={info.title} features={info} />
        ))}
      </main>
    </section>
  );
}

export default Features;
