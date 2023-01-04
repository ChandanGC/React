import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastApp() {
  let success = () => {
    toast.success("Successfull");
  };
  let error = () => {
    toast.error("Try again");
  };
  return (
    <>
      <ToastContainer />
      <button onClick={success}>Success</button>
      <button onClick={error}>Error</button>
    </>
  );
}

export default ToastApp;
