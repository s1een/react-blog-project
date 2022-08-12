import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import ModalWindow from "./components/ModalWindow";

function App() {
  return (
    <>
      <Header />
      <ModalWindow />
      <AppRouter />
    </>
  );
}

export default App;
