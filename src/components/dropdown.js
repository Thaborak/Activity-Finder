import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown(props) {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
    if (props.setType) props.setType(event.target.value);
  };

  const options = props.opts.map((otp) => (
    <MenuItem value={otp}>{otp}</MenuItem>
  ));

  const title = props.title;

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-select-small">{title}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="Type"
        onChange={handleChange}
        autoWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options}
      </Select>
    </FormControl>
  );
}
