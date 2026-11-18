import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import WorkspaceRail from "../components/sidebar/WorkspaceRail";
import ConversationSidebar from "../components/sidebar/ConversationSidebar";

function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Workspace navigation rail */}
      <Box
        sx={{
          width: 72,
          flexShrink: 0,
          borderRight: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* Workspace rail will be implemented here */}
      </Box>
        <WorkspaceRail />
        <ConversationSidebar />
      {/* Main page content */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;