import SectionHeader from "../ui/SectionHeader";
import goalsIcon from "../../../assets/icons/banner-pie-icon.png";
import SettingsIcon from "../../../assets/icons/banner-settings-icon.png";

function Banner() {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center __section-padding md:py-16 relative">
      <SectionHeader title="Get instant access" />

      <p className="text-[#BBBBBB] max-w-[28rem] text-center mb-6 __anim-bottom __delay-400">
        Celebrate the joy of accomplishment with an app designed to track your
        progress and motivate your efforts.
      </p>

      <form className="flex flex-wrap gap-2 md:justify-center px-5">
        <input
          type="text"
          placeholder="name@email.com"
          className="placeholder:text-white/50 bg-white/20 py-2 px-4 rounded-lg border-none outline-none focus:ring-1 ring-white/50 md:w-fit w-full __anim-left __delay-600"
        />
        <button className="w-full md:w-fit py-2 px-4 font-semibold bg-white rounded-lg border-none text-black __anim-right __delay-800">
          Get access
        </button>
      </form>

      <img
        src={goalsIcon}
        alt="message"
        loading="lazy"
        className="absolute top-0 size-[12rem] left-10 drop-shadow-2xl md:block hidden __anim-right __delay-1000"
      />
      <img
        src={SettingsIcon}
        alt="message"
        loading="lazy"
        className="absolute top-24 size-[14rem] right-10 drop-shadow-2xl md:block hidden __anim-left __delay-1000"
      />
    </section>
  );
}

export default Banner;
