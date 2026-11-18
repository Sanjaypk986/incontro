import { Box, Typography } from "@mui/material";

function NotFoundPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">404 — Page Not Found</Typography>
    </Box>
  );
}

export default NotFoundPage;