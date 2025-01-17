import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero-grad min-h-[90vh] text-white __section-padding md:pt-14 relative overflow-y-hidden"
    >
      <main className="flex items-center flex-col gap-7 relative z-20 md:mt-7 h-full">
        <h1 className="font-extrabold text-[8.5rem] leading-[0.8] text-center">
          One Task <br /> at a Time
        </h1>
        <SectionHeader description="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes." />
        <Button>Signup now!</Button>
      </main>
    </section>
  );
}

export default Hero;
