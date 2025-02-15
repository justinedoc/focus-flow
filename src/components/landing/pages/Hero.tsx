import SectionHeader from "../ui/SectionHeader";
import heroIconSend from "../../../assets/icons/send-icon.png";
import heroIconMsg from "../../../assets/icons/msg-icon.png";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero-grad min-h-screen md:min-h-[90vh] text-white  relative overflow-y-hidden md:px-36 px-5 py-32 md:py-16"
    >
      <main className="flex items-center flex-col gap-7 relative z-20 md:mt-7 h-full">
        <h1 className="font-extrabold text-[4.5rem] md:text-[6rem] lg:text-[8.5rem] leading-[0.8] text-center __anim-bottom __delay-200">
          One Task <br /> at a Time
        </h1>
        <SectionHeader description="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes." />
        <Link to={"/signup"}>
          <Button className="flex gap-2 items-center cursor-pointer group __anim-left __delay-1000 bg-white text-black hover:text-white">
            <span>Get Started</span>
            <FaArrowRightLong className="group-hover:scale-110 transition duration-300 group-hover:translate-x-2" />
          </Button>
        </Link>
      </main>

      <img
        src={heroIconMsg}
        alt="message"
        loading="lazy"
        className="absolute top-32 size-[12rem] lg:right-14 xl:right-48 z-20 drop-shadow-2xl hidden md:block __anim-left __delay-500"
      />
      <img
        src={heroIconSend}
        alt="message"
        loading="lazy"
        className="absolute top-48 size-[12rem] lg:left-20 xl:left-52 z-20 drop-shadow-2xl hidden md:block __anim-right __delay-650"
      />
    </section>
  );
}

export default Hero;
