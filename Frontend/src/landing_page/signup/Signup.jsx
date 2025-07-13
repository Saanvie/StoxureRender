import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { Card } from "./SignupDesign";

export default function AuthForm() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [emailError, setEmailError] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const [isSignup, setIsSignup] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email || email.trim() === "") {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (isSignup) {
      if (!username || username.trim() === "") {
        setUsernameError(true);
        isValid = false;
      } else {
        setUsernameError(false);
      }
    }

    if (!password || password.trim() === "") {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    return isValid;
  };

  const handleAuth = async () => {
    if (!validateInputs()) {
      setError("Please fill all required fields.");
      return;
    }
    const API_BASE_URL =
      process.env.NODE_ENV === "production"
        ? "https://stoxure-backend.onrender.com"
        : "http://localhost:3002";

    try {
      const endpoint = isSignup
        ? `${API_BASE_URL}/api/auth/signup`
        : `${API_BASE_URL}/api/auth/login`;

      const payload = isSignup
        ? { email, username, password }
        : { email, password };

      const res = await axios.post(endpoint, payload, {
        withCredentials: true,
      });

      if (res.data.success) {
        setMessage(
          res.data.message ||
          (isSignup ? "Signup successful!" : "Login successful!")
        );
        setError("");
        setOpen(true);

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        setError(
          res.data.message || (isSignup ? "Signup failed." : "Login failed.")
        );
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        (isSignup ? "Signup failed." : "Login failed.")
      );
    }
  }
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card variant="outlined">
          <Box
            component="form"
            noValidate
            sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailError ? "Email is required." : ""}
                id="email"
                type="email"
                name="email"
                value={email}
                fullWidth
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            {isSignup && (
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <TextField
                  error={usernameError}
                  helperText={usernameError ? "Username is required." : ""}
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
            )}

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordError ? "Password is required." : ""}
                id="password"
                type="password"
                name="password"
                value={password}
                fullWidth
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}

            <Button
              variant="contained"
              onClick={handleAuth}
              sx={{ marginTop: "16px" }}
            >
              {isSignup ? "Sign Up" : "Log In"}
            </Button>

            <Button
              variant="text"
              onClick={() => {
                setIsSignup(!isSignup);
                setError("");
                setMessage("");
              }}
              sx={{ marginTop: "8px" }}
            >
              {isSignup
                ? "Already have an account? Log In"
                : "Don't have an account? Sign Up"}
            </Button>
          </Box>

          <Snackbar
            open={open}
            autoHideDuration={3000}
            message={message}
            onClose={handleClose}
          />
        </Card>
      </Box>
    );
  }
