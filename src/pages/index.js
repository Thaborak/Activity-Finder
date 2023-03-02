import { useState, useEffect, useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SelectType from "../components/dropdown";
import SliderSelect from "../components/slider";
import Activity from "../components/activity";
import Text from "../components/text";

const types = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

export default function Home() {
  const parameters = useContext({
    accessibility: null,
    price: null,
    type: null,
    participants: null,
  });

  // Search parameters state
  const [accessibility, setAccessibility] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState("");

  console.log([accessibility, price, type, participants]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Activity Finder
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          Don't know what to do this weekend? Need some inspiration? Well
          Activity Finder has you covered! Enter in some parameters to narrow
          down some cool plans or be spontaneous and leave them blank for a fun
          surprise.
        </Typography>
      </Box>
      <Box>
        <SliderSelect
          setAccessibility={setAccessibility}
          name="Accessibility"
        />
        <SliderSelect setPrice={setPrice} name="Price Range" />
        <SelectType setType={setType} opts={types} title="Type" />
        <Text setParticipants={setParticipants} label={"Participants"} />
        <Button variant="contained">Search</Button>
      </Box>

      <Activity />
    </Container>
  );
}
