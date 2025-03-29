import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#31D158",
        },
        background: {
            default: "#121212",
            paper: "#121212",
        },
        text: {
            primary: "#fbfbfb",
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "12px",
                    borderRadius: 10,
                    textTransform: "none",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontSize: "12px",
                    borderRadius: 10,
                    textTransform: "none",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: "12px",
                    borderRadius: 10,
                    transition: "none",
                    textTransform: "none",
                    "& fieldset": {
                        borderColor: "rgba(255,255,255,0.2) !important",
                    },
                    "&:hover fieldset": {
                        borderColor: "rgba(255,255,255,0.2) !important",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "rgba(255,255,255,0.2) !important",
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: "12px",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "inherit",
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontSize: "12px",
                    textTransform: "none",
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
