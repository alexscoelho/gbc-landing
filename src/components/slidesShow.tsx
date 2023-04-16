import ITestimonial from "../models/Testimonial";
import Testimonial from "./testimonial";

interface Props {
  items: ITestimonial[];
}

function SlidesShow({ items }: Props) {
  return (
    <div className="carousel w-full">
      {items.map((item, index) => {
        return (
          <div id={`slide${index}`} className="carousel-item relative w-full">
            <Testimonial item={item} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? items.length - 1 : index - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${index < items.length - 1 ? index + 1 : 0}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SlidesShow;
