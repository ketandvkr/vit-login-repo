import React, { useState } from "react";
import { Grid, Box, Tabs, Tab, Card, Typography } from "@mui/material";
import sign from "../images/sign.png";
import Log from "./Log";
import RegisterForm from "./RegisterForm";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const LogReg = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        lg={7}
        sm={5}
        sx={{
          backgroundImage: `url(${sign})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Grid>
      <Grid item lg={5} sm={7}>
        <Card
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box>
            <Box
              border={"1px dashed black"}
              sx={{ width: "100%", backgroundColor: "#f0f0f0" }}
            >
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  label="LogIn"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                />
                <Tab
                  label="Register"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Log />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <RegisterForm />
            </TabPanel>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LogReg;
