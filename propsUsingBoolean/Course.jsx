import React from "react";

const Course = props => {
  if (props.data.CourseAvail === true) {
    return (
      <>
        <h1>{props.data.courseName}</h1>
        <button style={{ backgroundColor: "green" }}>AVAILABLE</button>
      </>
    );
  } else {
    return (
      <>
        <h1>{props.data.courseName}</h1>
        <button style={{ backgroundColor: "red" }}>NOT AVAILABLE</button>
      </>
    );
  }
};
export default Course;
