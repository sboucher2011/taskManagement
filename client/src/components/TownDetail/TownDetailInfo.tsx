// External

// Styles
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Types
import { Town } from "../../types/Town";

interface TownDetailInfoProps {
  town: Town;
}

function TownDetailInfo(props: TownDetailInfoProps) {
  const { town } = props;
  return (
    <>
      <h2>{town.name}</h2>
      <p>{town.pocName}</p>
      <p>{town.pocPhone}</p>
      <p>{town.pocEmail}</p>
    </>
  );
}

export default TownDetailInfo;
