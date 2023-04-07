import FeatureCard from "./featureCard";

function Courses() {
  return (
    <>
      <div className="flex justify-center text-5xl font-bold my-3" id="courses">
        <p className="font-poppins text-5xl">Courses</p>
      </div>

      <div className="grid md:grid-cols-3 gap-7 justify-center">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </>
  );
}

export default Courses;
