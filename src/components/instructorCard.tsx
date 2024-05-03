import Instructor from "../models/Instructor";

interface Props {
  item: Instructor;
}

function InstructorCard({ item }: Props) {
  const { name, style, location, image } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="instructor" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{style}</p>
        <p>{location}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <a
              target="_blank"
              href="https://www.youtube.com/@baritonerguitarrista/videos"
            >
              Youtube Channel
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
