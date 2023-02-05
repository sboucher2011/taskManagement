// External

// Styles
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import CircularProgress from "@mui/material/CircularProgress";

//Types
import { Todo } from "../../../types/Todo";

interface ToDoCardProps {
  toDo: Todo;
  handleRemoveTodo: () => void;
  handleEditTodo: () => void;
}

function ToDoCard(props: ToDoCardProps) {
  const { toDo, handleRemoveTodo, handleEditTodo } = props;

  const handleIconClicked = (type: string) => {
    <CircularProgress />;
    if (type === "delete") {
      handleRemoveTodo();
    }
  };

  return (
    <Card sx={{ minWidth: 275, marginBottom: "5px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {toDo.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {toDo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <EditIcon onClick={() => handleEditTodo()} />
        <DeleteIcon onClick={() => handleIconClicked("delete")} />
      </CardActions>
    </Card>
  );
}

export default ToDoCard;
