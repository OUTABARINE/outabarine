import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import me from "../assets/img/me.png";

export default function Home() {
  return (
    <>
      <Grid
        container
        display="flex"
        alignItems="center"
        direction="column"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Avatar
            alt="Omar OUTABARINE"
            src={me}
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
             variant="h3"
             sx= {{
               fontWeight: "800",
               lineHeight: "1.11429",
               fontFamily: '"Segoe UI"',
               color: "text.primary"
             }}
             gutterBottom
          >
            Omar OUTABARINE
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            variant="h5"
            component="h2"
            justifyContent="center"
            alignContent="center"
          >
            Software Engineer - Business Analyst - Agile & Scrum Paster
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
