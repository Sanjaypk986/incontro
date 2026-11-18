import { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import { Search, Plus, ChevronDown, Hash } from "lucide-react";

const channels = ["general", "development", "random"];

const conversations = [
  { id: 1, name: "Alex Morgan", message: "Hey, did you finish the UI?", time: "10:42", online: true, unread: 2 },
  { id: 2, name: "Sarah Wilson", message: "I'll check it shortly", time: "09:18", online: true, unread: 0 },
  { id: 3, name: "David Kim", message: "Thanks for sharing!", time: "Yesterday", online: false, unread: 0 },
  { id: 4, name: "Emma Johnson", message: "Let's discuss this tomorrow", time: "Yesterday", online: false, unread: 1 },
];

function ConversationSidebar() {
  const [activeItem, setActiveItem] = useState("general");

  return (
    <Box
      sx={{
        width: 280,
        height: "100%",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        bgcolor: "#191C22",
        borderRight: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      {/* Workspace Header */}
      <Box
        sx={{
          height: 64,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography fontWeight={700} fontSize={16}>
            Connect
          </Typography>

          <Typography fontWeight={700} color="primary" fontSize={16}>
            Hub
          </Typography>
        </Box>

        <IconButton size="small">
          <ChevronDown size={18} />
        </IconButton>
      </Box>

      {/* Search */}
      <Box sx={{ px: 1.5, pt: 2, pb: 1 }}>
        <Box
          sx={{
            height: 38,
            px: 1.2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "#222730",
            border: "1px solid #2C323C",
            borderRadius: 2,
          }}
        >
          <Search size={17} color="#8993A3" />

          <InputBase
            placeholder="Search"
            fullWidth
            sx={{
              fontSize: 13,
              color: "text.primary",
              "& input::placeholder": {
                opacity: 1,
                color: "#8993A3",
              },
            }}
          />
        </Box>
      </Box>

      {/* Sidebar Content */}
      <Box sx={{ flex: 1, overflowY: "auto", px: 1.2, pb: 2 }}>
        {/* Channels */}
        <Box sx={{ mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 0.8,
              mb: 0.8,
            }}
          >
            <Typography
              variant="caption"
              fontWeight={700}
              color="text.secondary"
              sx={{ letterSpacing: 0.6 }}
            >
              CHANNELS
            </Typography>

            <IconButton size="small">
              <Plus size={16} />
            </IconButton>
          </Box>

          {channels.map((channel) => (
            <Box
              key={channel}
              component="button"
              onClick={() => setActiveItem(channel)}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                px: 1,
                py: 0.9,
                mb: 0.3,
                border: 0,
                borderRadius: 1.5,
                bgcolor: activeItem === channel ? "#2A303A" : "transparent",
                color: activeItem === channel ? "text.primary" : "text.secondary",
                cursor: "pointer",
                textAlign: "left",
                "&:hover": {
                  bgcolor: "#242A33",
                  color: "text.primary",
                },
              }}
            >
              <Hash size={17} />

              <Typography fontSize={13.5} fontWeight={activeItem === channel ? 600 : 400}>
                {channel}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Direct Messages */}
        <Box sx={{ mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 0.8,
              mb: 0.8,
            }}
          >
            <Typography
              variant="caption"
              fontWeight={700}
              color="text.secondary"
              sx={{ letterSpacing: 0.6 }}
            >
              DIRECT MESSAGES
            </Typography>

            <IconButton size="small">
              <Plus size={16} />
            </IconButton>
          </Box>

          {conversations.map((user) => (
            <Box
              key={user.id}
              component="button"
              onClick={() => setActiveItem(`user-${user.id}`)}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                px: 1,
                py: 1,
                mb: 0.3,
                border: 0,
                borderRadius: 1.5,
                bgcolor: activeItem === `user-${user.id}` ? "#2A303A" : "transparent",
                color: "text.primary",
                cursor: "pointer",
                textAlign: "left",
                "&:hover": {
                  bgcolor: "#242A33",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Avatar
                  sx={{
                    width: 34,
                    height: 34,
                    fontSize: 12,
                    bgcolor: "#39465A",
                  }}
                >
                  {user.name.split(" ").map((n) => n[0]).join("")}
                </Avatar>

                {user.online && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      bgcolor: "#45C486",
                      border: "2px solid #191C22",
                    }}
                  />
                )}
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography fontSize={13} fontWeight={activeItem === `user-${user.id}` ? 600 : 500}>
                  {user.name}
                </Typography>

                <Typography
                  fontSize={11.5}
                  color="text.secondary"
                  noWrap
                >
                  {user.message}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 0.5 }}>
                <Typography fontSize={10.5} color="text.secondary">
                  {user.time}
                </Typography>

                {user.unread > 0 && (
                  <Box
                    sx={{
                      minWidth: 18,
                      height: 18,
                      px: 0.5,
                      borderRadius: 5,
                      bgcolor: "primary.main",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {user.unread}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ConversationSidebar;