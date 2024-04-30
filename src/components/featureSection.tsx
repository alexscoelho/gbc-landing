import React from "react";

interface Props {
  title: string;
  id: string;
  children: React.ReactNode;
  columns?: number;
}

function FeatureSection({ title, children, id, columns = 3 }: Props) {
  return (
    <>
      <div className="flex justify-center text-5xl font-bold my-3" id={id}>
        <p className="font-poppins text-5xl">{title}</p>
      </div>

      <div
        className={`grid md:grid-cols-${columns} gap-3 justify-center my-4 mx-6 place-items-center`}
      >
        {children}
      </div>
    </>
  );
}

export default FeatureSection;
