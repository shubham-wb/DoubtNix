import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      return toast.error("Please add both email and password");
    }
    const response = await auth.login(email, password);
    if (response.success) {
      toast.success("signed in successfully");
      console.log(response.data);
    } else {
      toast.error("Umm ! we cannot log you in ");
    }
    setLoggingIn(false);
  };

  if (auth.user) {
    if (auth.user.role === "student") {
      return <Navigate to="/dashboard/0" />;
    } else if (auth.user.role === "teacher") {
      return <Navigate to="/dashboard/1" />;
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        id="login-box"
        style={{
          paddingLeft: "20px",
          height: "300px",
          width: "250px",
          backgroundColor: "whitesmoke",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ height: "10%", width: "100%", fontSize: "1.4rem" }}>
          Log In
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            height: "15%",
            width: "80%",
            marginTop: "20px",
            padding: "0px 10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
            style={{
              height: "45%",
              width: "10%",
              marginRight: "15px",
            }}
          ></img>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div
          style={{
            padding: "0px 10px",

            backgroundColor: "white",
            marginTop: "20px",
            alignItems: "center",
            height: "15%",
            width: "80%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            style={{
              height: "45%",
              width: "10%",
              marginRight: "15px",
            }}
          ></img>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          style={{
            marginTop: "10px",
            height: "12%",
            width: "26%",
          }}
        >
          <Button
            style={{
              textTransform: "none",
              color: "white",
              height: "100%",
              width: "100%",
              backgroundColor: "#058cf0e3",
            }}
            disabled={loggingIn}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {loggingIn ? "Login" : "Login"}
          </Button>
        </div>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            width: "85%",

            background: "black",
          }}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              marginBottom: "10px",
              color: "#058cf0e3",
            }}
          >
            New User ? <Link to="">Signup</Link>
          </div>
          <div
            style={{
              fontSize: "12px",
              marginBottom: "10px",
              color: "#058cf0e3",
              marginLeft: "80px",
            }}
          >
            Faculty Signup
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
