import "./Login.scss";

function Login(props) {
  return (
    <div className="login-contents">
      <input type="email" placeholder="Email" className="login-input-field" />
      <input
        type="password"
        placeholder="Password"
        className="login-input-field"
      />
      <a href="#" className="forgot-pass-btn">
        forgot password
      </a>
      <a href="#" className="signin-up-btn">
        sign in
      </a>
    </div>
  );
}

export default Login;
