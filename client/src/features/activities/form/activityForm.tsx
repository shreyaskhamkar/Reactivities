import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

type Props = {
  closeForm: () => void;
  activity?: Activity;
  submitForm: (activity: Activity) => void;
};
export default function activityForm({
  closeForm,
  activity,
  submitForm,
}: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    if(activity) data["id"] = activity.id;
    submitForm(data as unknown as Activity);
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
          name="title"
          label="Title"
          variant="outlined"
          defaultValue={activity?.title}
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          defaultValue={activity?.category}
        />
        <TextField
          name="date"
          label="Date"
          variant="outlined"
          type="date"
          defaultValue={activity?.date}
        />
        <TextField
          name="city"
          label="City"
          variant="outlined"
          defaultValue={activity?.city}
        />
        <TextField
          name="venue"
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
