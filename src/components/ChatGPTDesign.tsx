"use client";
import React, { useState } from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    TextField,
    IconButton,
    Paper,
    Container,
    List,
    InputAdornment,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Send } from "lucide-react";
import Link from "next/link";

import theme from "../../theme";
import LandingScreen from "./LandingScreen";
import MessageBubble from "./MessageBubble";
import SignInDialog from "./SignInDialog";

type Role = "system" | "user" | "assistant";
interface Message {
    role: Role;
    content: string;
}

export default function ChatGPTDesign() {
    const [signedIn, setSignedIn] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = () => {
        if (!userInput.trim()) return;

        // Agrega el mensaje del usuario
        const newUserMessage: Message = { role: "user", content: userInput };
        setMessages((prev) => [...prev, newUserMessage]);

        // Simula la respuesta del asistente
        const simulatedResponse: Message = {
            role: "assistant",
            content: "Esta es una respuesta simulada de nuestra IA.",
        };

        setMessages((prev) => [...prev, simulatedResponse]);
        setUserInput("");
    };

    // Callback para el diálogo de inicio de sesión
    const handleSignIn = (provider: "spotify" | "apple" | "youtube") => {
        console.log(`Signing in with ${provider}...`);
        // Aquí iría la lógica real de SSO.
        setSignedIn(true);
    };

    return (
        <ThemeProvider theme={theme}>
            {/* Muestra el diálogo de inicio de sesión si no se ha autenticado */}
            <SignInDialog open={!signedIn} onSignIn={handleSignIn} />

            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "background.default",
                    color: "text.primary",
                    mx: "auto",
                    px: { xs: 1, sm: 2, md: 4 },
                }}
            >
                <AppBar position="static" color="transparent" elevation={1}>
                    <Toolbar>
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            Powered by {" "}
                            <a
                                style={{ color: theme.palette.primary.main }}
                                href="https://amoxtli.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Amoxtli Web Developers
                            </a>
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* Contenedor de mensajes o pantalla de bienvenida */}
                <Container
                    sx={{
                        flexGrow: 1,
                        overflow: "auto",
                        mt: 2,
                        px: { xs: 0, sm: 2 },
                    }}
                    maxWidth="lg"
                >
                    {messages.length === 0 ? (
                        <LandingScreen />
                    ) : (
                        <List>
                            {messages.map((msg, index) => (
                                <MessageBubble
                                    key={index}
                                    role={msg.role}
                                    content={msg.content}
                                />
                            ))}
                        </List>
                    )}
                </Container>

                {/* Área de entrada */}
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 1, sm: 2 },
                        backgroundColor: "transparent",
                        mb: { xs: 1, sm: 2 },
                    }}
                >
                    <Box
                        sx={{
                            mx: "auto",
                            width: { xs: "100%", sm: "90%", md: "80%" },
                        }}
                    >
                        <TextField
                            fullWidth
                            multiline
                            minRows={1}
                            maxRows={10}
                            variant="outlined"
                            placeholder="Busca tu música favorita..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    alignItems: "flex-end",
                                },
                                "& .MuiInputBase-root": {
                                    alignItems: "center",
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-end",
                                        }}
                                    >
                                        <IconButton
                                            onClick={handleSendMessage}
                                            disabled={!userInput.trim()}
                                            sx={{
                                                borderRadius: "9999px",
                                                p: 0.5,
                                            }}
                                        >
                                            <Send size={20} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}
