import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Stack,
    Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import mood from "../assets/white.svg";

interface SignInDialogProps {
    open: boolean;
    onSignIn: (provider: "spotify" | "apple" | "youtube") => void;
}

const SignInDialog: React.FC<SignInDialogProps> = ({ open, onSignIn }) => {
    const theme = useTheme();

    return (
        <Dialog
            open={open}
            sx={{
                backdropFilter: "blur(5px)",
                "& .MuiPaper-root": {
                    backgroundColor: "black !important",
                    width: "400px", // Increased width
                    maxWidth: "90%", // Responsive width
                    padding: theme.spacing(2),
                },
            }}
        >
            <Image src={mood} alt="Mood Music AI" width={200} height={50} style={{ margin: "0 auto", marginBottom: 16 }} />
            <DialogTitle textAlign={'center'}>Inicia sesión con tu servicio de música</DialogTitle>
            <DialogContent>
                <Stack spacing={2} sx={{ mt: 1 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<FaSpotify />}
                        onClick={() => onSignIn("spotify")}
                        sx={{fontWeight: 500}}
                    >
                        Sign in with Spotify
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<FaApple />}
                        onClick={() => onSignIn("apple")}
                        sx={{fontWeight: 500}}
                    >
                        Sign in with Apple Music
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<FaYoutube />}
                        onClick={() => onSignIn("youtube")}
                        sx={{fontWeight: 500}}
                    >
                        Sign in with YouTube
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default SignInDialog;