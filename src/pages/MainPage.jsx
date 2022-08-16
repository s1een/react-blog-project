import React, { useState } from "react";
import Login from "../components/Login";
import { useSelector } from "react-redux";

function MainPage() {
  const user = useSelector((state) => state.appReducer.user);
  console.log(user);
  return <Login />;
}

export default MainPage;
