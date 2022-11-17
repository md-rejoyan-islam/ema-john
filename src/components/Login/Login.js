import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";


const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const { password, email } = Object.fromEntries(data.entries());
    console.log(password, email);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Not match");
        console.log(error);
      });
  };
  return (
    <div className="formControl">
      <h2 className="fromTitle">Login</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" required />
          </div>
          <div>
            <button>submit</button>
            <p style={{ textAlign: "center" }}>
              New to Ema-John?{" "}
              <Link to="/register" className="link">
                Create New Account
              </Link>
            </p>
            <div style={{ width: "80%", display: "flex", color: "gray" }}>
              <hr style={{ width: "40%", height: ".1px" }} /> or
              <hr style={{ width: "40%", height: "1px" }} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
