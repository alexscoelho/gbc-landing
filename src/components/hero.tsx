import heroImage from "../assets/heroImage.jpg";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 font-mono">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Raise Your Skills!</h1>
          <p className="py-6">
            Welcome to Guitar Bootcamp Center, founded by guitarist and
            instructor Alex Coelho. We offer online and in-person lessons for
            all levels, from beginners to advanced. Our diverse team of
            instructors specializes in various styles. Whether you're in Florida
            or anywhere else, we're here to help you unleash your musical
            potential.{" "}
            <p className="text-xl">
              Unleash your musical potential with us and take your guitar skills
              to new heights!
            </p>
          </p>
          <button className="btn btn-primary">
            <a href="#price">Start Now</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
