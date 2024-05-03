import React from "react";

export const GearAdvisor = () => {
  return (
    <>
      <div className="flex justify-center text-5xl font-bold my-3">
        <p className="font-poppins text-5xl">Gear Advisor</p>
      </div>

      <div
        className="flex justify-center text-5xl font-bold my-3"
        id="gearAdvisor"
      >
        <div className="card w-1/2 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Let's chat about gear</h2>
            <p className="text-sm">
              I'm a Passionate guitarist, devoted musician, and experienced
              instructor sharing the love for music and the art of guitar
              playing. Let's dive into the world of strings, amplifiers, and
              effects together! 🎸
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                href="https://linktr.ee/elmusicoalex?utm_source=linktree_admin_share"
              >
                <button className="btn">Start Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
