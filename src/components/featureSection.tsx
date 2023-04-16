import React from "react";
import FeatureCard from "./featureCard";

interface Props {
  title: string;
  children: React.ReactNode;
}

function FeatureSection({ title, children }: Props) {
  return (
    <>
      <div className="flex justify-center text-5xl font-bold my-3" id="courses">
        <p className="font-poppins text-5xl">{title}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-7 justify-center">{children}</div>
    </>
  );
}

export default FeatureSection;
