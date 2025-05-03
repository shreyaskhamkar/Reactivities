import { Grid } from "@mui/material";
import ActivityList from "./activityList";
import ActivityDetail from "../details/activityDetail";
import ActivityForm from "../form/activityForm";

type Props = {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
  handleCancelSelectActivity: () => void;
  selectedActivity?: Activity;
  editMode?: boolean;
  opneForm: (id?: string) => void;
  closeForm: () => void;
};
export default function activityDashboard({
  activities,
  handleSelectActivity,
  handleCancelSelectActivity,
  selectedActivity,
  editMode,
  opneForm,
  closeForm,
}: Props) {
  return (
    <Grid container spacing={2}>
      <Grid size={7}>
        <ActivityList
          activities={activities}
          handleSelectActivity={handleSelectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
            openForm={opneForm}
          />
        )}
        {editMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity} />
        )}
      </Grid>
    </Grid>
  );
}
