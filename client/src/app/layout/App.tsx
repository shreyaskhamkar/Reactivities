import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/activityDashboard";
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [editMode, setEditMode] = useState(false);

  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  const handleOpenCreateForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleCloseCreateForm = () => {
    setEditMode(false);
  };
  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };
  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };
  // const handleCreateActivity = (newActivity: Activity) => {
  //   setActivities([...activities, newActivity]);
  // };
  // const handleUpdateActivity = (updatedActivity: Activity) => {
  //   setActivities(
  //     activities.map((activity) =>
  //       activity.id === updatedActivity.id ? updatedActivity : activity
  //     )
  //   );
  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenCreateForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          handleSelectActivity={handleSelectActivity}
          handleCancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          opneForm={handleOpenCreateForm}
          closeForm={handleCloseCreateForm}
        />
      </Container>
    </Box>
  );
}

export default App;
