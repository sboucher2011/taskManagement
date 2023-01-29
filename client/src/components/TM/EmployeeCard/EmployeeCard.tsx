// External

// Styles
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../../utils/StringAvatar";

//Types
import { User } from "../../../types/User";

interface EmployeeCardProps {
  employee: User;
  handleRemoveEmployee: () => void;
}

function EmployeeCard(props: EmployeeCardProps) {
  const { employee, handleRemoveEmployee } = props;
  const fullName = employee.firstName + " " + employee.lastName;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar {...stringAvatar(fullName)} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {fullName}
        </Typography>
        <Typography variant="h5" component="div">
          {employee.role}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {employee.title}
        </Typography>
        <Typography variant="body2">{employee.phoneNumber}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{employee.emailAddress}</Button>
        <Button size="small" onClick={handleRemoveEmployee}>
          Remove Employee
        </Button>
      </CardActions>
    </Card>
  );
}

export default EmployeeCard;
