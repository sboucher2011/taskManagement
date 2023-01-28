// External

// Styles
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Types
import { Todo } from "../../../types/Todo";

interface ToDoCardProps {
  toDo: Todo;
  handleRemoveTodo: () => void;
}

function ToDoCard(props: ToDoCardProps) {
  const { toDo, handleRemoveTodo } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {toDo.title}
        </Typography>
        <Typography variant="h5" component="div">
          {toDo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRemoveTodo}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ToDoCard;
