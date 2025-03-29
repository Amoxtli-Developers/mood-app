import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CardContent from "./CardContent";
import { Smile, Sparkles, AudioWaveform } from "lucide-react";
import Image from "next/image";
import mood from "../assets/mood.svg";

export default function LandingScreen() {
    const theme = useTheme();

    return (
        <Box sx={{ textAlign: "center", mt: 8 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Image
                    src={mood}
                    alt="Mood Music AI"
                    width={500}
                    height={500}
                    style={{ marginBottom: 24 }}
                />
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    Sumérgete en la música que potencia tu{" "}
                    <span
                        style={{
                            color: theme.palette.primary.main,
                            fontWeight: "bold",
                        }}
                    >
                        mood
                    </span>
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    mt: 8,
                    flexWrap: "wrap",
                }}
            >
                <CardContent
                    title="IA Inteligente"
                    icon={<Smile />}
                    description="Nuestra IA reconoce emociones, actividades, gustos e historial para crear la playlist perfecta."
                />
                <CardContent
                    title="Chat Fácil"
                    icon={<Sparkles />}
                    description="Exprésate en el chat y recibe playlists hechas a tu medida en segundos."
                />
                <CardContent
                    title="Conexión Total"
                    icon={<AudioWaveform />}
                    description="Sincroniza con Spotify, Apple Music y YouTube para disfrutar tu música en cualquier dispositivo."
                />
            </Box>
        </Box>
    );
}
