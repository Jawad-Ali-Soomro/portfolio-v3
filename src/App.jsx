import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import Loader from "./Pages/Loader";

function App() {
  const [loading, set_loading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      set_loading(false);
    }, 2000);
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={loading == true ? <Loader /> : <Home />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
