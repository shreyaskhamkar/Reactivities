import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
};
export default function activityList({
  activities,
  handleSelectActivity,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          handleSelectActivity={handleSelectActivity}
        />
      ))}
    </Box>
  );
}
