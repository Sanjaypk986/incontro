import { Box, IconButton, Tooltip, Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
    MessageSquare,
    Bell,
    Compass,
    Settings,
    HelpCircle,
} from "lucide-react";

const railItems = [
    {
        label: "Messages",
        icon: MessageSquare,
        path: "/messages",
    },
    {
        label: "Activity",
        icon: Bell,
        disabled: true,
    },
    {
        label: "Explore",
        icon: Compass,
        disabled: true,
    },
];

function WorkspaceRail() {
    return (
        <Box
            sx={{
                width: 72,
                height: "100%",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 2,
                gap: 2,
                bgcolor: "#14171D",
                borderRight: "1px solid",
                borderColor: "divider",
            }}
        >
            {/* App Logo */}
            <Box
                sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2.5,
                    bgcolor: "primary.main",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                }}
            >
                <MessageSquare size={22} strokeWidth={2.2} />
            </Box>

            {/* Navigation */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    width: "100%",
                }}
            >
                {railItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Tooltip
                            key={item.label}
                            title={item.disabled ? `${item.label} (Coming soon)` : item.label}
                            placement="right"
                            arrow
                        >
                            <span>
                                <IconButton
                                    component={item.path ? NavLink : "button"}
                                    to={item.path}
                                    disabled={item.disabled}
                                    className={
                                        item.path
                                            ? ({ isActive }) => (isActive ? "active" : "")
                                            : undefined
                                    }
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 2.5,
                                        color: "text.secondary",
                                        transition: "all 0.2s ease",

                                        "&:hover": {
                                            bgcolor: "#252A33",
                                            color: "text.primary",
                                        },

                                        "&.active": {
                                            bgcolor: "rgba(91, 141, 239, 0.15)",
                                            color: "primary.main",
                                        },

                                        "&.active:hover": {
                                            bgcolor: "rgba(91, 141, 239, 0.22)",
                                        },

                                        "&.Mui-disabled": {
                                            color: "#454B55",
                                        },
                                    }}
                                >
                                    <Icon size={21} strokeWidth={2} />
                                </IconButton>
                            </span>
                        </Tooltip>
                    );
                })}
            </Box>

            {/* Bottom Navigation */}
            <Box
                sx={{
                    mt: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Tooltip title="Help" placement="right" arrow>
                    <IconButton
                        disabled
                        sx={{ width: 44, height: 44, borderRadius: 2.5 }}
                    >
                        <HelpCircle size={20} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Settings (Coming soon)" placement="right" arrow>
                    <IconButton
                        disabled
                        sx={{ width: 44, height: 44, borderRadius: 2.5 }}
                    >
                        <Settings size={20} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Your profile" placement="right" arrow>
                    <Avatar
                        sx={{
                            width: 34,
                            height: 34,
                            fontSize: 14,
                            fontWeight: 600,
                            bgcolor: "#345D9D",
                            cursor: "pointer",
                            mb: 0.5,
                        }}
                    >
                        S
                    </Avatar>
                </Tooltip>
            </Box>
        </Box>
    );
}

export default WorkspaceRail;