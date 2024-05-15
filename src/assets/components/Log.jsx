import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

const Log = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    console.log(data); // Do something with the form data
    reset(); // Reset the form
    navigate("/Dashboard");
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      id="login"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            label="Password"
            fullWidth
            margin="normal"
            error={Boolean(errors.password)}
            helperText={errors.password && errors.password.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginRight: 2 }}
      >
        Log In
      </Button>
      <NavLink to="/PasswordResetForm" style={{ marginLeft: "10px" }}>
        Forgot Password?
      </NavLink>
    </Box>
  );
};

export default Log;
