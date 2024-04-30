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
              Hey there! Ready to dive into the world of guitar gear? From
              sleek, shredding axes to dreamy pedals that transport you to
              another dimension of sound, there's always something exciting to
              explore. Whether you're a seasoned pro or just starting out, let's
              chat about your favorite guitars, amps, effects, or anything else
              that makes your fingers itch to play. So, what's your go-to gear
              that makes you feel like a rockstar?
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                href="https://www.instagram.com/elmusicoalex/?igsh=MTQ4azExYno3czU4ZA%3D%3D&utm_source=qr"
              >
                <button className="btn">Contact Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
