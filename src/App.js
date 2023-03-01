import "./styles.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    // This is an example of a Material UI Card component.
    // Please feel free to make any and all edits that you see fit.
    // Material UI Docs: https://mui.com/material-ui/getting-started/overview/
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          Activity Title
        </Typography>
        <Typography>Accessibility: TBD</Typography>
        <Typography>Type: TBD</Typography>
        <Typography>Participants: TBD</Typography>
        <Typography>Price: TBD</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
