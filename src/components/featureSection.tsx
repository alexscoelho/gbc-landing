import React from "react";

interface Props {
  title: string;
  id: string;
  children: React.ReactNode;
}

function FeatureSection({ title, children, id }: Props) {
  return (
    <>
      <div className="flex justify-center text-5xl font-bold my-3" id={id}>
        <p className="font-poppins text-5xl">{title}</p>
      </div>

      <div
        className={`grid md:grid-cols-${
          title === "Instructors" ? "1" : "3"
        } gap-7 justify-center my-4 mx-6 place-items-center`}
      >
        {children}
      </div>
    </>
  );
}

export default FeatureSection;
