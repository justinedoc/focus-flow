import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import heroIconSend from "../../../assets/icons/send-icon.png";
import heroIconMsg from "../../../assets/icons/msg-icon.png";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero-grad min-h-screen md:min-h-[90vh] text-white __section-padding pt-16 relative overflow-y-hidden"
    >
      <main className="flex items-center flex-col gap-7 relative z-20 md:mt-7 h-full">
        <h1 className="font-extrabold text-[4.5rem] md:text-[6rem] lg:text-[8.5rem] leading-[0.8] text-center">
          One Task <br /> at a Time
        </h1>
        <SectionHeader description="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes." />
        <Button>Signup now!</Button>
      </main>

      <img
        src={heroIconMsg}
        alt="message"
        loading="lazy"
        className="absolute top-32 size-[12rem] right-48 z-20 drop-shadow-2xl hidden md:block"
      />
      <img
        src={heroIconSend}
        alt="message"
        loading="lazy"
        className="absolute top-48 size-[12rem] left-52 z-20 drop-shadow-2xl hidden md:block"
      />
    </section>
  );
}

export default Hero;
