export const PriceCard = () => {
  return (
    <div className="flex justify-center" id="price">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Online 1hr Lessons</h2>
          <p>$70</p>
          <div className="card-actions justify-end">
            <div>
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
    </div>
  );
};
