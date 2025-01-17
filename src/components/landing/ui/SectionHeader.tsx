interface SectionHeaderTypes {
  title?: string;
  description?: string;
}

function SectionHeader({ title, description }: SectionHeaderTypes) {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-[3rem] font-bold mb-3">{title}</h1>
      <p className="font-light max-w-[24rem] text-pretty text-center">
        {description}
      </p>
    </header>
  );
}

export default SectionHeader;
