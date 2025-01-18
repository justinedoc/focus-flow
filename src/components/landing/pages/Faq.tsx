import { FaPlus } from "react-icons/fa6";
import { faqs, type FaqsType } from "../constants/Faq";
import SectionHeader from "../ui/SectionHeader";
import { useRef, useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <section
      id="help"
      className="__section-padding bg-gradient-to-b from-[#4F21A1] to-black min-h-screen text-white md:py-14 space-y-5"
    >
      <SectionHeader title="Frequently asked questions" />

      <article className="flex flex-col items-center">
        {faqs.map((faq, index) => (
          <FaqAccordion
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </article>
    </section>
  );
}

function FaqAccordion({
  faq,
  isOpen,
  onClick,
}: {
  faq: FaqsType;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-gray-300/20 max-w-[37rem]">
      <button
        className="w-full flex justify-between items-center py-5 text-left"
        onClick={onClick}
      >
        <h3 className="font-medium text-lg">{faq.question}</h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <FaPlus />
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[height] duration-500`}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="py-2 text-gray-400">{faq.answer}</p>
      </div>
    </div>
  );
}

export default Faq;
