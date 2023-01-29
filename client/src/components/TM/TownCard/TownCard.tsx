// External

// Styles
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Types
import { Town } from "../../../types/Town";

interface TownCardProps {
  town: Town;
  handleRemoveTown: () => void;
}

function TownCard(props: TownCardProps) {
  const { town, handleRemoveTown } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {town.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRemoveTown}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TownCard;
