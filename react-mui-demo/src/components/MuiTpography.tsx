import React from "react";
import { Typography } from "@mui/material";

export const MuiTpography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum
        vitae id accusamus dolor optio saepe modi eum debitis libero fugiat
        error voluptas ab eaque quas dolorem deleniti, dolores excepturi.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti
        consequatur esse quas, voluptas sint perferendis iste consectetur ipsam
        soluta voluptates quisquam tenetur amet cupiditate rerum, quasi
        voluptatem doloribus corrupti.
      </Typography>
    </div>
  );
};
