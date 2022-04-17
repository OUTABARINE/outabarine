import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import SocialMedia from "./SocialMedia";

const pages = [
  { label: "Vlog", link: process.env.REACT_APP_SM_YOUTUBE },
  { label: "Blog", link: "/blog" },
  { label: "Resume", link: "/resume" },
  { label: "About", link: "/about" },
];

export default function Footer(props) {
  return (
    <footer>
      <Grid
        container
        display="flex"
        alignItems="center"
        direction="column"
        alignContent="center"
        justifyContent="center"
      >
        {/* <Grid container direction="row" justifyContent="center" spacing={2}>
          {pages.map((page, index) => {
            return (
              <Grid item key={index} sx={{ mt: 8 }}>
                <Link key={index} href={page.link} variant="h6" color="text.primary">
                  {page.label}
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <Grid container direction="row" justifyContent="center" spacing={1}>
          <SocialMedia dark={props.dark} />
        </Grid> */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{ pb: 1, pt: 1}}
        >
          <Typography variant="p" component="p">
            © Omar OUTABARINE, France
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
