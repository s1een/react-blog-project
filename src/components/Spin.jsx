import { Circles } from "react-loader-spinner";
import { useSelector } from "react-redux";
import React from "react";

function Spin() {
  const spinner = useSelector((state) => state.appReducer.loading);
  return (
    <div className="loader-styles">
      <Circles visible={spinner} color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Spin;
