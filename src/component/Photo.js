import React from "react";
import "./style.css";
const Photo = () => {
  var img = "https://picsum.photos/200/200";
  var img1 = "https://picsum.photos/201/200";
  var img2 = "https://picsum.photos/202/200";
  var img3 = "https://picsum.photos/203/200";
  var img4 = "https://picsum.photos/204/200";
  var img5 = "https://picsum.photos/205/200";
  var img6 = "https://picsum.photos/206/200";
  var img7 = "https://picsum.photos/207/200";

  return (
    <>
      <h1 className="text">
        My <b>Website</b> for <b>Photo</b> Gellary
      </h1>
      <div className="photos">
        <img src={img} alt="note" />
        <img src={img1} alt="note" />
        <img src={img2} alt="note" />
        <img src={img3} alt="note" /> <br />
        <img src={img4} alt="note" />
        <img src={img5} alt="note" />
        <img src={img6} alt="note" />
        <img src={img7} alt="note" />
      </div>
    </>
  );
};

export default Photo;
