import { Button, TextField, Typography } from "@mui/material";

const LoginPage = () => {
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
          />
          <TextField
            required
            id="standard-required"
            label="Password"
            variant="standard"
            size="large"
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
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
