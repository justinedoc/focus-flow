import SectionHeader from "../ui/SectionHeader";
import aboutImg from "../../../assets/images/about-img.png";

function About() {
  return (
    <section
      id="about"
      className="bg-about-grad text-white flex flex-col items-center __section-padding md:py-16 relative"
    >
      <SectionHeader
        title="Intuitive interface"
        description="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time."
      />

      <img
        src={aboutImg}
        alt="dashboard img"
        loading="lazy"
        className="my-3 __anim-bottom __delay-400"
      />
    </section>
  );
}

export default About;
