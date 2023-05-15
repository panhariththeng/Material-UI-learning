import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";

export const MuiLoadingButon = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};
