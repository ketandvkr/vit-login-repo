import React, { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    setSubmitting(true);

    // Simulate asynchronous API call
    setTimeout(() => {
      console.log(data); // You can replace this with your API call

      // Display success message
      setAlert({ type: "success", message: "User registered successfully!" });

      // Reset the form
      reset();

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setAlert(null);
      }, 3000);

      setSubmitting(false);
    }, 1000);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      id="registerForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      {alert && (
        <Alert severity={alert.type} onClose={() => setAlert(null)}>
          {alert.message}
        </Alert>
      )}
      <Controller
        name="username"
        control={control}
        defaultValue=""
        rules={{ required: "Username is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Username"
            fullWidth
            margin="normal"
            error={Boolean(errors.username)}
            helperText={errors.username && errors.username.message}
          />
        )}
      />
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
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
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
      <Controller
        name="passwordConfirmation"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) =>
            value === password.current || "The passwords do not match",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            label="Confirm Password"
            fullWidth
            margin="normal"
            error={Boolean(errors.passwordConfirmation)}
            helperText={
              errors.passwordConfirmation && errors.passwordConfirmation.message
            }
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Register"}
      </Button>
    </Box>
  );
};

export default RegisterForm;
