interface SectionHeaderTypes {
  title?: string;
  description?: string;
}

function SectionHeader({ title, description }: SectionHeaderTypes) {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-[2.1rem] md:text-[3rem] font-bold mb-3 text-center">{title}</h1>
      <p className="font-light max-w-[25rem] text-pretty text-center text-[1.2rem] md:text-sm">
        {description}
      </p>
    </header>
  );
}

export default SectionHeader;
