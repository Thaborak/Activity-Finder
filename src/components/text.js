import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Text(props) {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.setParticipants) props.setParticipants(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={value}
          id="outlined-number"
          label={props.label}
          type="number"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
