import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  handleCancelSelectActivity: () => void;
  openForm: (id?: string) => void;
};

export default function activityDetail({
  activity,
  handleCancelSelectActivity,
  openForm,
}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {activity.title}
        </Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => openForm(activity.id)}>
          Edit
        </Button>
        <Button onClick={handleCancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
