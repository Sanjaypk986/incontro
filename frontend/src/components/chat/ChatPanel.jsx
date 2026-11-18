import { Box, Typography } from "@mui/material";
import ChatHeader from "./ChatHeader";

function ChatPanel() {
  return (
    <Box
      sx={{
        height: "100%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        bgcolor: "#111318",
      }}
    >
      <ChatHeader />

      {/* Message area - next step */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          p: 3,
        }}
      >
        <Typography color="text.secondary" fontSize={13}>
          Message history will appear here.
        </Typography>
      </Box>

      {/* Message composer - will be added after message list */}
    </Box>
  );
}

export default ChatPanel;