import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import goalsIcon from "../../../assets/icons/banner-pie-icon.png";
import SettingsIcon from "../../../assets/icons/banner-settings-icon.png";

function Banner() {
  return (
    <section className="bg-black text-white flex flex-col items-center __section-padding md:py-16 justify-center relative">
      <SectionHeader title="Get instant access" />

      <p className="text-[#BBBBBB] max-w-[28rem] text-center mb-6">
        Celebrate the joy of accomplishment with an app designed to track your
        progress and motivate your efforts.
      </p>

      <form className="flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="name@email.com"
          className="placeholder:text-white/50 bg-white/20 py-2 px-4 rounded-lg border-none outline-none focus:ring-1 ring-white/50"
        />
        <Button>Get access</Button>
      </form>

      <img
        src={goalsIcon}
        alt="message"
        loading="lazy"
        className="absolute top-0 size-[12rem] left-10 drop-shadow-2xl"
      />
      <img
        src={SettingsIcon}
        alt="message"
        loading="lazy"
        className="absolute top-24 size-[14rem] right-10 drop-shadow-2xl "
      />
    </section>
  );
}

export default Banner;
