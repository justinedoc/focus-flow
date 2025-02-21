interface TestimonialCardProps {
  data: {
    image: string;
    name: string;
    content: string;
    username: string;
  };
  index: number;
}

function TestimonialCard({ data, index }: TestimonialCardProps) {
  return (
    <div
      className={`text-[0.8rem] md:flex-shrink-0 w-fit md:max-w-[17rem] flex flex-col justify-between gap-3 p-6 shadow-md rounded-xl font-light border border-[#F1F1F1]/10 cursor-pointer bg-[#0D0D0D]/25 backdrop-blur-md __anim-top __delay-${
        index * 250
      }`}
    >
      <p className="text-base">{data.content}</p>
      <div className="flex gap-2 items-center">
        <img
          loading="lazy"
          src={data.image}
          alt="profile image"
          className="rounded-full size-8"
          width={20}
          height={20}
        />
        <div className="flex flex-col">
          <h3 className="font-medium">{data.name}</h3>
          <h4>{data.username}</h4>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
