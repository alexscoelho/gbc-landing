import ITestimonial from "../models/Testimonial";

interface Props {
  item: ITestimonial;
}

function Testimonial({ item }: Props) {
  const { avatar, name, comment } = item;
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* <img src={avatar} className="w-1/5 rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
