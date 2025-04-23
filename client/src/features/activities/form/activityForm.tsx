import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
  closeForm: () => void;
  activity?: Activity;
};
export default function activityForm({ closeForm, activity }: Props) {
  const handleSubmit = (event: any) => {
    console.log(event);
  };
  return (
    <Paper sx={{ padding: 3, borderRadius: 3 }} elevation={3}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection={"column"}
        gap={3}
      >
        <TextField
          label="Title"
          variant="outlined"
          defaultValue={activity?.title}
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          label="Category"
          variant="outlined"
          defaultValue={activity?.category}
        />
        <TextField
          label="Date"
          variant="outlined"
          type="date"
          defaultValue={activity?.date}
        />
        <TextField
          label="City"
          variant="outlined"
          defaultValue={activity?.city}
        />
        <TextField
          label="Venue"
          variant="outlined"
          defaultValue={activity?.venue}
        />
        <Box display={"flex"} justifyContent="end">
          <Button onClick={closeForm} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
