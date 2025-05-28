import React, { createContext, useState, useMemo, useContext, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

const lightPalette = {
    mode: "light",
    primary: {
        main: "#bfa44f",
        contrastText: "#121212",
    },
    secondary: {
        main: "#7f7f7f",
        contrastText: "#fff",
    },
    background: {
        default: "#fafafa",
        paper: "#ffffff",
    },
    text: {
        primary: "#000",
        secondary: "#606060",
    },
    divider: "#d6c98f",
    action: {
        hover: "#f0e6b7",
        selected: "#f7f3d7",
    },
};

const darkPalette = {
    mode: "dark",
    primary: {
        main: "#bfa44f",
        contrastText: "#000000B2",
    },
    secondary: {
        main: "#9a9a9a",
        contrastText: "#eeeeee",
    },
    background: {
        default: "#181521",
        paper: "#181521",
    },
    text: {
        primary: "#eee6b7",
        secondary: "#cfcaa3",
    },
    divider: "#8a7f3f",
    action: {
        hover: "#2a2a16",
        selected: "#3c3a1e",
    },
};

export function ThemeProvider({ children }) {
    const [mode, setMode] = useState("light");
    const [transitionActive, setTransitionActive] = useState(false);

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setTransitionActive(true);  // activar transición
            setTimeout(() => {
                setMode((prev) => (prev === "light" ? "dark" : "light"));
                setTransitionActive(false); // desactivar transición luego de cambio
            }, 300); // duración para el efecto (igual que la transición CSS)
        },
        mode,
    }), [mode]);

    const theme = useMemo(() => createTheme({
        palette: mode === "light" ? lightPalette : darkPalette,
        typography: {
            fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
            h4: {
                fontWeight: 700,
                letterSpacing: "0.08rem",
                color: mode === "light" ? "#7a6e30" : "#e3d88f",
                textShadow: mode === "dark" ? "0 1px 2px rgba(0,0,0,0.5)" : "none",
            },
            body1: {
                color: mode === "light" ? "#3c3c3c" : "#cfcaa3",
                fontWeight: 400,
                lineHeight: 1.7,
            },
            button: {
                fontWeight: 700,
                letterSpacing: "0.05rem",
            },
        },
        shape: {
            borderRadius: 10,
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        padding: "1.5rem",
                        borderRadius: 12,
                        boxShadow: mode === "light"
                            ? "0 4px 20px rgba(191,164,79,0.15)"
                            : "0 6px 24px rgba(191,164,79,0.3)",
                        backgroundColor: mode === "light" ? "#fff" : "#25241b",
                        transition: "background-color 0.5s ease, box-shadow 0.5s ease",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: "none",
                        padding: "0.75rem 2rem",
                        boxShadow: "0 4px 14px rgba(191,164,79,0.35)",
                        fontSize: "1rem",
                        color: mode === "light" ? "#121212" : "#fff",
                        backgroundColor: "#bfa44f",
                        transition: "all 0.5s ease",
                        "&:hover": {
                            backgroundColor: "#a68f33",
                            boxShadow: "0 6px 24px rgba(166,143,51,0.65)",
                            color: mode === "light" ? "#121212" : "#fff",
                        },
                    },
                },
                defaultProps: {
                    color: "primary",
                    variant: "contained",
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: "outlined",
                },
                styleOverrides: {
                    root: {
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 8,
                            backgroundColor: mode === "light" ? "#fff" : "#3b3a2b",
                            color: mode === "light" ? "#3c3c3c" : "#e3d88f",
                            "& fieldset": {
                                borderColor: mode === "light" ? "#bfa44f" : "#e3d88f",
                                borderWidth: 2,
                            },
                            "&:hover fieldset": {
                                borderColor: "#a68f33",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#a68f33",
                                borderWidth: 3,
                            },
                            "& input": {
                                color: mode === "light" ? "#2e2e2e" : "#f5eda0",
                            },
                            "& textarea": {
                                color: mode === "light" ? "#2e2e2e" : "#f5eda0",
                            },
                        },
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        transition: "color 0.5s ease",
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === "light" ? "#d6c98f" : "#8a7f3f",
                        transition: "background-color 0.5s ease",
                    },
                },
            },
        },
        transitions: {
            duration: {
                standard: 500,
            },
        },
    }), [mode]);

    return (
        <ThemeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        pointerEvents: "none",
                        backdropFilter: transitionActive ? "blur(8px)" : "none",
                        backgroundColor: transitionActive ? "rgba(191,164,79,0.15)" : "transparent",
                        transition: "backdrop-filter 0.3s ease, background-color 0.3s ease",
                        zIndex: 9999,
                    }}
                />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useThemeContext debe usarse dentro de ThemeProvider");
    return context;
}