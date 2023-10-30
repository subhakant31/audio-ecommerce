import "./App.scss";
import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);
  return (
    <React.Fragment>
      {!isUserLoggedin ? <LoginPage></LoginPage> : <HomePage />}
    </React.Fragment>
  );
}

export default App;
