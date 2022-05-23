import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import { useNavigate, Link } from "react-router-dom";
import axiox from "axios";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "45ch",
//     },
//   },
// }));

const Register = ({ setLogoutUser }) => {
//   const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axiox
      .post("http://localhost:5000/api/auth/register", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setLogoutUser(false);
        navigate("/");
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Register Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        noValidate
        autoComplete="off"
        onSubmit={register}
      >
        <input
          id="username"
          label="Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Register
        </button>
      </form>
      <p>
        Already have an account then please <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;