import { Box, Avatar, Typography, IconButton, Tooltip } from "@mui/material";
import { Phone, Video, Search, MoreVertical } from "lucide-react";

function ChatHeader() {
  const user = {
    name: "Alex Morgan",
    status: "Online",
    initials: "AM",
  };

  return (
    <Box
      sx={{
        height: 68,
        px: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid",
        borderColor: "divider",
        flexShrink: 0,
      }}
    >
      {/* User information */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: "#39465A",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {user.initials}
        </Avatar>

        <Box>
          <Typography fontWeight={600} fontSize={14}>
            {user.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.7 }}>
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: "#45C486",
              }}
            />

            <Typography variant="caption" color="text.secondary">
              {user.status}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Header actions */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        {[
          { icon: Phone, label: "Audio call" },
          { icon: Video, label: "Video call" },
          { icon: Search, label: "Search in conversation" },
          { icon: MoreVertical, label: "More options" },
        ].map(({ icon: Icon, label }) => (
          <Tooltip title={label} key={label}>
            <IconButton
              size="small"
              sx={{
                width: 36,
                height: 36,
                color: "text.secondary",
                "&:hover": {
                  bgcolor: "#252A33",
                  color: "text.primary",
                },
              }}
            >
              <Icon size={18} />
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}

export default ChatHeader;