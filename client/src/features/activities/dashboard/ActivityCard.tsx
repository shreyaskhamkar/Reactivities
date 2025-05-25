import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/usActivities";
import { Link } from "react-router";

type Props = {
  activity: Activity;
};
export default function ActivityCard({ activity }: Props) {
  const { deleteActivity } = useActivities();
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {activity.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 1 }}
          color="text.secondary"
        >
          {activity.date}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 1 }}
          color="text.secondary"
        >
          {activity.description}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", mb: 1 }}
          color="text.secondary"
        >
          {activity.city} / {activity.venue}
        </Typography>
        <CardActions
          sx={{ justifyContent: "space-between", display: "flex", pb: 2 }}
        >
          <Chip label={activity.category} />
          <Box display="flex" gap={3}>
            <Button
              component={Link}
              to={`/activities/${activity.id}`}
              size="medium"
              variant="contained"
            >
              View
            </Button>
            <Button
              onClick={() => deleteActivity.mutate(activity.id)}
              disabled={deleteActivity.isPending}
              size="medium"
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}
