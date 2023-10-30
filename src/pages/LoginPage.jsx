import { useState } from "react";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import "./LoginPage.scss";
function LoginPage(props) {
  const [isUserinDatabase, setIsUserinDatabase] = useState(true);
  return (
    <div className="login-page">
      <div className="login-page__contents">
        <div className="login-page__contents__title">
          <h1 className="heading">audio</h1>
          <span className="caption">it's modular and designed to last</span>
        </div>
        {isUserinDatabase ? <Login /> : <Signup />}
      </div>
    </div>
  );
}

export default LoginPage;
