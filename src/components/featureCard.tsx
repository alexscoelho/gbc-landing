import Course from "../models/Course";

interface Props {
  item: Course;
}

function FeatureCard({ item }: Props) {
  const { title, image, description, url } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <a target="_blank" href={url}>
            <button className="btn btn-primary">Watch Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
