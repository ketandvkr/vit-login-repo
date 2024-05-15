import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Alert,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const PasswordResetForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [agreed, setAgreed] = useState(false); // State for tracking checkbox

  const onSubmit = async (data) => {
    setSubmitting(true);

    // Simulate asynchronous API call to send reset email
    setTimeout(() => {
      console.log(data); // You can replace this with your API call

      // Display success message
      setAlert({
        type: "success",
        message: "Password reset email sent successfully!",
      });

      // Reset the form
      reset();

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setAlert(null);
      }, 3000);

      setSubmitting(false);
    }, 1000);
  };

  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      id="passwordResetForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container>
        <Grid item xs={12}>
          {alert && (
            <Alert severity={alert.type} onClose={() => setAlert(null)}>
              {alert.message}
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
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
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox checked={agreed} onChange={handleCheckboxChange} />
            }
            label="I agree to the terms and conditions"
          />
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!agreed || submitting} // Disable when not agreed or submitting
            smallwidth
          >
            {submitting ? "Sending..." : "Send Reset Email"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PasswordResetForm;
