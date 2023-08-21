import { Icon } from "@mui/material";
import AddHomeIcon from "@mui/icons-material/AddHome";
import GroupIcon from "@mui/icons-material/Group";
const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: <AddHomeIcon />,
  },
  {
    title: "home",
    path: "/home",
    icon: <GroupIcon />,
  },
  {
    title: "product",
    path: "/product",
    icon: <GroupIcon />,
  },
];

export default navConfig;
