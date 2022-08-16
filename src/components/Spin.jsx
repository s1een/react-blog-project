import { Circles } from "react-loader-spinner";
import React from "react";

function Spin({ spinner }) {
  return (
    <div className="loader-styles">
      <Circles visible={spinner} color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Spin;
