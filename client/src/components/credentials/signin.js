import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";
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
    } else {
      toast.error("Umm ! we cannot log you in ");
    }
    setLoggingIn(false);
  };

  if (auth.user) {
    toast.success("succesfully signedin");
    return <Navigate to="/dashboard/0" />;
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <span>Log In</span>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Paasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button
          disabled={loggingIn}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {loggingIn ? "Logging in..." : "Log In"}
        </button>
      </div>
    </>
  );
};

export default SignIn;
