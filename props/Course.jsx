import React from "react";

const Course = props => {
  let data = props.payload;
  return (
    <div className="mainContainer">
      <div>
        <img src="{data[0].photo}" alt="" />
        <h1>{data[0].courseName}</h1>
        <h2>{data[0].trainer}</h2>
        <h2>{data[0].duration}</h2>
        <h2>{data[0].languages}</h2>
      </div>
      <div>
        <img src="{data[1].photo}" alt="" />
        <h1>{data[1].courseName}</h1>
        <h2>{data[1].trainer}</h2>
        <h2>{data[1].duration}</h2>
        <h2>{data[1].languages}</h2>
      </div>
    </div>
  );
};

export default Course;
