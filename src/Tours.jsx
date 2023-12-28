import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [tour, setTour] = useState([]);
  const [isLoad, setIsload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const resp = await fetch(url);
          const data = await resp.json();
          console.log(data);
          setTour(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      setIsload(false);
    }, 2000);
  }, []);

  const removeTour = (id) => {
    const newArr = tour.filter((t) => t.id !== id);
    setTour(newArr);
  };

  if (tour.length === 0) {
    return (
      <>
        <Btn />
        {isLoad && <Loading />}
      </>
    );
  } else {
    return (
      <>
        <h3 className="title">our tours</h3>
        <div className="title-underline"></div>
        <div className="tours">
          {tour.map((dt) => {
            return (
              <div className="single-tour" key={dt.id}>
                <Tour {...dt} />
                <button
                  className="btn btn-block delete-btn"
                  type="button"
                  onClick={() => removeTour(dt.id)}
                >
                  Not intrested
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Tours;

const Btn = () => {
  return (
    <button
      type="button"
      onClick={() => location.reload()}
      className="btn btn-block"
    >
      Refresh
    </button>
  );
};
