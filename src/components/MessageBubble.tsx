import React from "react";
import { ListItem, Paper, ListItemText } from "@mui/material";

type Role = "system" | "user" | "assistant";

interface MessageBubbleProps {
    role: Role;
    content: string;
}

export default function MessageBubble({ role, content }: MessageBubbleProps) {
    const align = role === "user" ? "flex-end" : "flex-start";
    const bgColor = role === "user" ? "primary.main" : "background.paper";
    const textColor = role === "user" ? "common.white" : "text.primary";

    return (
        <ListItem sx={{ justifyContent: align }}>
            <Paper
                sx={{
                    p: 1,
                    backgroundColor: bgColor,
                    color: textColor,
                    borderRadius: 2,
                    maxWidth: 500,
                }}
            >
                <ListItemText primary={content} />
            </Paper>
        </ListItem>
    );
}
