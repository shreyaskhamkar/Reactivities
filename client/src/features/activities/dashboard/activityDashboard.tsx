import { Grid, Typography } from "@mui/material";
import ActivityList from "./activityList";
import { useActivities } from "../../../lib/hooks/usActivities";

export default function activityDashboard() {
  const { activities, isPending } = useActivities();

  if (!activities || isPending)
    return <Typography>Loading activities...</Typography>;
  return (
    <Grid container spacing={2}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={5}>Activity Filters</Grid>
    </Grid>
  );
}
