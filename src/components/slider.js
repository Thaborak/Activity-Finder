import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function SliderSelect(props) {
  const [value, setValue] = React.useState([0.0, 0.5]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (props.setPrice) props.setPrice(newValue);
    if (props.setAccessibility) props.setAccessibility(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        {props.name}
      </Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={0.01}
        min={0}
        max={1}
      />
    </Box>
  );
}
