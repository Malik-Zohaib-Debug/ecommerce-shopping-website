import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMints: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error("Invalid username or password. Please try again.", {
            position: "top-center",
          });
        } else {
          toast.success("Login successful!", {
            position: "top-center",
          });
          const userInfo = JSON.stringify({
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            image: data.image,
          });
          localStorage.setItem("access_token", data.accessToken);
          localStorage.setItem("user_data", userInfo);
        }
        setIsLoading(false);
      });
  };

  return (
    <div className="login-page">
      <div className="login-form-img"></div>
      <div className="login-form">
        <Typography variant="h3" gutterBottom>
          Ecommerce Shopping Store
        </Typography>
        <div className="login-form-fields">
          <TextField
            required
            id="standard-required"
            label="Username"
            variant="standard"
            size="large"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Password"
            variant="standard"
            size="large"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          sx={{
            width: "350px",
            margin: "auto",
            marginTop: "50px",
            padding: "10px",
          }}
          variant="contained"
          onClick={handleLogin}
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
