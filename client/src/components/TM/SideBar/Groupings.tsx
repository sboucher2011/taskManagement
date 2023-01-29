import { Divider } from "@mui/material";
import { SideBarCategory } from "../../../interfaces/SideBarCategory";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Icons
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TaskIcon from "@mui/icons-material/Task";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

interface GroupingsProps {
  title: string;
  items: SideBarCategory[];
  onCategorySelected: (title: string) => void;
}

function Groupings(props: GroupingsProps) {
  const { title, items, onCategorySelected } = props;
  return (
    <div>
      <h3>{title}</h3>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => onCategorySelected(item.title)}>
              <ListItemIcon>
                {item.icon === "LogoutIcon" && <LogoutIcon />}
                {item.icon === "PersonIcon" && <PersonIcon />}
                {item.icon === "SettingsIcon" && <SettingsIcon />}
                {item.icon === "TextSnippetIcon" && <TextSnippetIcon />}
                {item.icon === "GroupIcon" && <GroupIcon />}
                {item.icon === "ApartmentIcon" && <ApartmentIcon />}
                {item.icon === "ReceiptLongIcon" && <ReceiptLongIcon />}
                {item.icon === "AccessTimeIcon" && <AccessTimeIcon />}
                {item.icon === "TaskIcon" && <TaskIcon />}
                {item.icon === "LocationCityIcon" && <LocationCityIcon />}
                {item.icon === "ListAltIcon" && <ListAltIcon />}
                {item.icon === "ContactSupportIcon" && <ContactSupportIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}

export default Groupings;
