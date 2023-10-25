import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import About from "./About/About";
import Layout from "../pages/layout";

function App() {
  let widthScreen = window.screen.width;
  const [state, setState] = useState(widthScreen);
  window.addEventListener("resize", function () {
    setState(window.screen.width);
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route
            index
            element={state <= 768 ? <About /> : <Navigate to="login" replace />}
          /> */}
          <Route index element={<About />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
