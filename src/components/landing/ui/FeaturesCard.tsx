import { type FeaturesTypes } from "../constants/Features";

function FeaturesCard({ features }: { features: FeaturesTypes }) {
  return (
    <article className="flex flex-col items-center max-w-[20rem] border border-white/20 rounded-md md:gap-2 gap-4 px-4 py-6 bg-[#0D0D0D]">
      <div className="size-14 bg-white rounded-xl flex items-center justify-center">
        {features.icon}
      </div>
      <h1 className="text-xl md:text-lg font-semibold">{features.title}</h1>
      <p className="text-md md:text-sm text-center text-pretty font-light">
        {features.description}
      </p>
    </article>
  );
}

export default FeaturesCard;
