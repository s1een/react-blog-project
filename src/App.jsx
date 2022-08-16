import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import ModalEdit from "./components/ModalEdit";
import ModalWindow from "./components/ModalWindow";

function App() {
  return (
    <>
      <Header />
      <ModalWindow />
      <ModalEdit />
      <AppRouter />
    </>
  );
}

export default App;
