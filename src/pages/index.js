import { useState, createContext, useContext, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import SelectType from "../components/dropdown";
import SliderSelect from "../components/slider";
import Activity from "../components/activity";
import Text from "../components/text";
import url from "../components/url";

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

const initialState = {
  accessibility: [0, 0],
  price: [0, 0],
  type: "education",
  participants: 1,
};

export default function Home() {
  // Search parameters state
  const [accessibility, setAccessibility] = useState(
    initialState.accessibility
  );
  const [price, setPrice] = useState(initialState.price);
  const [type, setType] = useState(initialState.type);
  const [participants, setParticipants] = useState(initialState.participants);
  const [parameters, setParameters] = useState(
    "https://www.boredapi.com/api/activity"
  );

  const options = {
    accessibility: accessibility,
    price: price,
    type: type,
    participants: participants,
  };

  const handleSearch = () => {
    const parameters = url(options);
    setParameters(parameters);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Activity Finder
      </Typography>
      <Typography variant="subtitle1" component="p" gutterBottom>
        Don't know what to do this weekend? Need some inspiration? Well Activity
        Finder has you covered! Enter in some parameters to narrow down some
        cool plans or be spontaneous and leave them blank for a fun surprise.
      </Typography>
      <Box>
        <Stack direction="row" spacing={2}>
          <SliderSelect
            setAccessibility={setAccessibility}
            name="Accessibility"
          />
          <SliderSelect setPrice={setPrice} name="Price Range" />
          <SelectType setType={setType} opts={types} title="Type" />
          <Text setParticipants={setParticipants} label={"Participants"} />
          <IconButton onClick={handleSearch} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Stack>
      </Box>
      <Activity url={parameters} />
    </Container>
  );
}
