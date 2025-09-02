import React from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <button onClick={() => toast.success("success")}>Click me</button>
      HomePage
    </div>
  );
};

export default HomePage;
