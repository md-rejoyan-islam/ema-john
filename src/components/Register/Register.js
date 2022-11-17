import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import "./Register.css";

const Register = () => {
  const { createUser, signByGoogle } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const { confirm, password, email } = Object.fromEntries(data.entries());
    if (password.length < 6) {
      setError("At least 6 letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("at least one lower case");
      return;
    }
    if (!/[@#$%^&*()_!+]/.test(password)) {
      setError("at least one special symbol");
      return;
    }
    if (password != confirm) {
      setError("Password not Match");
      return;
    }
    console.log(email, password, confirm);

      // createUser(email, password)
      //   .then((result) => {
      //     navigator('/')
      //     console.log(result.user)})
      //   .catch((error) => console.log(error));
        
    };
    const handleGoogle = () => {
      // signByGoogle()
      //   .then((result) => console.log(result.user))
      //   .catch((error) => console.log(error));
  };
  return (
    <div className="formControl">
      <h2 className="fromTitle">Sign Up</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>
          <div>
            <p style={{ textAlign: "center", color: "rgb(234,23,45)" }}>
              {" "}
              {error ? error : ""}
            </p>
            <button>Sign Up</button>

            <p style={{ textAlign: "center" }}>
              Already Have a account ?
              <Link to="/login" className="link">
                Login
              </Link>
            </p>
            <div style={{ width: "80%", display: "flex", color: "gray" }}>
              <hr style={{ width: "40%", height: ".1px" }} /> or
              <hr style={{ width: "40%", height: "1px" }} />
            </div>
          </div>
        </form>
        <button
          className="btn btn-active btn-primary w-full"
          onClick={handleGoogle}
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default Register;
