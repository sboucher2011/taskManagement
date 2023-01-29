import React from "react";
import Groupings from "./Groupings";

interface DrawerProps {
  onCategorySelected: (title: string) => void;
}

const SideBarDrawer = (props: DrawerProps) => {
  const { onCategorySelected } = props;
  return (
    <div>
      <Groupings
        title={"Menu"}
        items={[
          { title: "Towns", icon: "LocationCityIcon" },
          { title: "Tasks", icon: "TaskIcon" },
          { title: "Reimbursment", icon: "ReceiptLongIcon" },
          { title: "Time Cards", icon: "AccessTimeIcon" },
        ]}
        onCategorySelected={onCategorySelected}
      />
      <Groupings
        title={"Manager"}
        items={[
          { title: "Town Management", icon: "ApartmentIcon" },
          { title: "Standard Tasks", icon: "ListAltIcon" },
          { title: "Employees", icon: "GroupIcon" },
          { title: "Reports", icon: "TextSnippetIcon" },
        ]}
        onCategorySelected={onCategorySelected}
      />
      <Groupings
        title={"Settings"}
        items={[
          { title: "Profile", icon: "PersonIcon" },
          { title: "Settings", icon: "SettingsIcon" },
          { title: "Support", icon: "ContactSupportIcon" },
          { title: "Log Out", icon: "LogoutIcon" },
        ]}
        onCategorySelected={onCategorySelected}
      />
    </div>
  );
};

export default SideBarDrawer;
