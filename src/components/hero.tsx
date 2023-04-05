import heroImage from "../assets/heroImage.jpg";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Raise Your Skills!</h1>
          <p className="py-6">
            Unleash your musical potential with us and take your guitar skills
            to new heights!
          </p>
          <button className="btn btn-primary">Start Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
