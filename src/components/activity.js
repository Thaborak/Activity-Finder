import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Activity() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.boredapi.com/api/activity?participants=9")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  if (data.error) return <p>{data.error}</p>;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            Activity Title
          </Typography>
          <Typography>Activity: {data.activity}</Typography>
          <Typography>Accessibility: {data.accessibility}</Typography>
          <Typography>Type: {data.type}</Typography>
          <Typography>Participants: {data.participants}</Typography>
          <Typography>Price: {data.price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Save Activity</Button>
        </CardActions>
      </Card>
    </div>
  );
}
