import { testimonialInfo } from "../constants/Testimonials";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";

function Testimonials() {
  return (
    <section
      id="#testimonials"
      className="__section-padding flex flex-col items-center bg-gradient-to-b from-[#4F21A1] to-black text-white"
    >
      <SectionHeader title="Testimonials" />
      <article className="flex flex-col gap-3 my-8 w-full items-center">
        <main className="__testimonial-card">
          {testimonialInfo.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard key={i} data={testimonial} index={i + 1} />
          ))}
        </main>
        <main className="__testimonial-card">
          {testimonialInfo.slice(3, 6).map((testimonial, i) => (
            <TestimonialCard key={i} data={testimonial} index={i + 1} />
          ))}
        </main>
      </article>
    </section>
  );
}

export default Testimonials;
