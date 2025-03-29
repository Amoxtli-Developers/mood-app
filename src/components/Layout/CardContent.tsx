import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { CardContentProps } from "@/interfaces/interfaces";

const CardContent: React.FC<CardContentProps> = ({
    title,
    description,
    icon,
}) => {
    return (
        <Card
            sx={(theme) => ({
                p: 2,
                width: 300,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: "transparent",
                backgroundImage: "none",
                boxShadow: "none",
                textAlign: "left",
            })}
        >
            <Box sx={{ display: "flex", justifyContent: "left", mb: 2 }}>
                <Box
                    sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        color: "#fbfbfb",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ color: (theme) => theme.palette.text.primary }}
                    >
                        {icon}
                    </Typography>{" "}
                </Box>
            </Box>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Box sx={{ p: 0, m: 0 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    {description}
                </Typography>
            </Box>
        </Card>
    );
};

export default CardContent;
