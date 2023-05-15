import { Stack, Link, Typography } from "@mui/material";
import React from "react";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">Link</Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
	  <Typography variant="h6">
      <Link href="#" color="secondary" underline="none">
        None underline
      </Link>
	  </Typography>
    </Stack>
  );
};
