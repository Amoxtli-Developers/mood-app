import React from "react";
import { ListItem, Paper, ListItemText } from "@mui/material";
import { MessageBubbleProps } from "@/interfaces/interfaces";

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
                    maxWidth: 500,
                }}
            >
                <ListItemText primary={content} />
            </Paper>
        </ListItem>
    );
}
