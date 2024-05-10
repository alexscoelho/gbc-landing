import Course from "../models/Course";
import videoFileFast from "../assets/lesson-1-fast.mp4";
import videoFileSlow from "../assets/lesson-1-slow.mp4";
import lessonBT from "../assets/lesson-1-BT.mp3";
import tabs from "../assets/tabs.pdf";
import { useState } from "react";

interface Props {
  item: Course;
}

function FeatureCard({ item }: Props) {
  const { title, image, description, url } = item;
  const [showTabs, setShowTabs] = useState(false);
  const [showVideoSlow, setShowVideoSlow] = useState(false);
  return (
    <div className="card w-4/12 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        {showVideoSlow ? (
          <div>
            <video controls>
              <source src={videoFileSlow} type="video/mp4" />
              {/* Add additional source elements for other video formats if needed */}
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <video controls>
            <source src={videoFileFast} type="video/mp4" />
            {/* Add additional source elements for other video formats if needed */}
            Your browser does not support the video tag.
          </video>
        )}
        <p>{description}</p>
        <audio controls title="backing track">
          <source src={lessonBT} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => setShowTabs(!showTabs)}
          >
            {showTabs ? "Hide" : "Show"} Tabs
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setShowVideoSlow(!showVideoSlow)}
          >
            {showVideoSlow ? "Fast" : "Slow"} Video
          </button>
        </div>
        {showTabs && (
          <>
            <embed src={tabs} type="application/pdf" width="430" height="300" />
          </>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
