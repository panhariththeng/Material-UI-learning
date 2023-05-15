import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>

      <Alert variant="outlined" security="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" security="warning">
        This is an warning alert
      </Alert>
      <Alert variant="outlined" security="success">
        This is an success alert
      </Alert>
      <Alert variant="outlined" security="error">
        This is an error alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close Alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
		action={
			<Button color="inherit" size="small">
				Undo
			</Button>
		}
      >
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};
