import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutRegister from "./About/AboutRegister";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import Info from "./About/Info";

function App() {
  let widthScreen = window.screen.width;
  const [state, setState] = useState(widthScreen);
  window.addEventListener("resize", function () {
    setState(window.screen.width);
  });

  return (
    <>
      <Routes>
        <Route path="/" element={state <= 768 ? <Info /> : <RegisterForm />} />
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        <Route path="/login" element={<LoginForm />} />
        {/* {state <= 768 ? <AboutRegister /> : <RegisterForm />} */}
      </Routes>
    </>
  );
}

export default App;
