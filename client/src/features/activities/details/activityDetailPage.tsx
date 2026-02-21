import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useActivities } from "../../../lib/hooks/usActivities";
import ActivityDetailHeader from "./activityDetailHeader";
import ActivityDetailInfo from "./activityDetailInfo";
import ActivityDetailChat from "./activityDetailChat";
import ActivityDetailSidebar from "./activityDetailSidebar";

export default function ActivityPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>;
  if (!activity) return <Typography>Activity not found...</Typography>;
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDetailChat />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ActivityDetailSidebar />
      </Grid>
    </Grid>
  );
}
