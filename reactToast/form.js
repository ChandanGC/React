import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// let form = document.querySelector("form")
let btn = () => {
  let uname = document.getElementById("uname");
  console.log(uname);
  let password = document.getElementById("password");
  if (
    uname.value === password.value &&
    uname.value !== "" &&
    password.value != ""
  ) {
    toast.success("login successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  if (uname.value == "" && password.value == "") {
    toast.warning("not be empty", { position: toast.POSITION.BOTTOM_CENTER });
  }
  if (uname.value != password.value) {
    toast.error("plz check", { position: toast.POSITION.BOTTOM_CENTER });
  }
};
class Toast extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          padding: "20px 80px 80px 80px",
          backgroundColor: "black",
          color: "yellow",
        }}
      >
        <ToastContainer />

        <h1>log in form</h1>
        <input type="text" name="uname" id="uname" />
        <br />
        <br />
        <input type="text" name="password" id="password" />
        <br />
        <br />
        <button onClick={btn}>submit</button>
      </div>
    );
  }
}

export default Toast;
