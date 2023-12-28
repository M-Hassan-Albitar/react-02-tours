import React, { useState } from "react";

function Tour(props) {
  const { image, info, name, price } = props;
  const [readMore, setReadMore] = useState("100px");
  const [isToggle, setIsToggle] = useState(true);
  const [show, setShow] = useState("show more");

  const handleReadMore = () => {
    if (isToggle) {
      setReadMore("fit-content");
      setIsToggle(false);
      setShow("show less");
    }
    if (!isToggle) {
      setReadMore("100px");
      setIsToggle(true);
      setShow("show more");
    }
  };
  return (
    <div>
      <div className="tour-price">{price}</div>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name} </h5>
        <p style={{ overflow: "hidden", height: readMore }}>{info}</p>
        <button type="button" className="info-btn" onClick={handleReadMore}>
          {show}
        </button>
      </div>
    </div>
  );
}

export default Tour;
