import { testimonialInfo } from "../constants/Testimonials";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="__section-padding flex flex-col items-center bg-gradient-to-b from-[#4F21A1] to-black text-white"
    >
      <SectionHeader title="Testimonials" />

      <article className="flex flex-wrap gap-5 my-8 w-full justify-center items-center">
        {testimonialInfo.map((testimonial, i) => (
          <TestimonialCard key={i} data={testimonial} index={i + 1} />
        ))}
      </article>
    </section>
  );
}

export default Testimonials;
