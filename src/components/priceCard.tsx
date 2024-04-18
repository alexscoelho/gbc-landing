export const PriceCard = () => {
  return (
    <div className="flex justify-center" id="price">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Online 1hr Lessons</h2>
          <p>$70</p>
          <div className="card-actions justify-end">
            <div
              className="tooltip"
              data-tip="guitarbootcampcenter@lessons.com"
            >
              <button className="btn">Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
