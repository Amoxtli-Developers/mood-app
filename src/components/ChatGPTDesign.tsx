// src/components/ChatGPTDesign.tsx
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
import Image from "next/image";
import mood from "@/assets/mood.svg";
import theme from "../../theme";
import LandingScreen from "@/components/Layout/LandingScreen";
import MessageBubble from "@/components/Layout/MessageBubble";
import SignInDialog from "./SignInDialog";

export type Role = "system" | "user" | "assistant";
export interface Message {
    role: Role;
    content: string;
}

interface ChatGPTDesignProps {
    userInput: string;
    setUserInput: (value: string) => void;
    messages: Message[];
    setMessages: (value: Message[] | ((prev: Message[]) => Message[])) => void;
    onSendMessage: (message: string) => void; // New prop to handle sending
}

export default function ChatGPTDesign({
    userInput,
    setUserInput,
    messages,
    setMessages,
    onSendMessage,
}: ChatGPTDesignProps) {
    const [signedIn, setSignedIn] = useState(false);

    const handleSendMessage = () => {
        if (!userInput.trim()) return;
        // Execute the passed-in send function
        onSendMessage(userInput);
        // Clear the input after sending
        setUserInput("");
    };

    const handleSignIn = (provider: "spotify" | "apple" | "youtube") => {
        console.log(`Signing in with ${provider}...`);
        setSignedIn(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <SignInDialog
                open={!signedIn}
                onSignIn={handleSignIn}
                onContinueAsGuest={() => setSignedIn(true)}
            />

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
                        <Image src={mood} alt="Logo" width={100} height={100} />
                        <Box sx={{ flexGrow: 1 }} />
                        <Typography variant="body1">
                            Powered by{" "}
                            <a
                                style={{
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                }}
                                href="https://amoxtli.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Amoxtli Web Developers
                            </a>
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        mt: 2,
                        px: { xs: 0, sm: 2 },
                        mx: "auto",
                        width: { xs: "100%", sm: "90%", md: "65%" },
                    }}
                    maxWidth="lg"
                >
                    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
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
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 1, sm: 2 },
                            backgroundColor: "transparent",
                            mt: 2,
                        }}
                    >
                        <Box sx={{ mx: "auto", width: "100%" }}>
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
                </Container>
            </Box>
        </ThemeProvider>
    );
}
