import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";
import React from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips(chips =>chips.filter((chip)=> chip !== chipToDelete)) 
  }
  return (
    <Stack spacing={1} direction="row">
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip Outlined"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
      />
      {
        chips.map(chip => (
          <Chip key={chip} label={chip} onDelete={()=> handleDelete(chip)}/>
        ))
      }
    </Stack>
  );
};

export default MuiChip;
