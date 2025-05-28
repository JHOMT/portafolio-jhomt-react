import React from "react";
import { Chip, Stack, Tooltip, useTheme, Box, Paper, Typography } from "@mui/material";
import techDetails from "../data/TechDetails";

export default function TechChips() {
    const theme = useTheme();

    const getNivelColor = (nivel) => {
        if (nivel >= 75) return "#4caf50"; // verde
        if (nivel >= 50) return "#ff9800"; // naranja
        return "#f44336"; // rojo
    };

    const allTechnologies = Object.keys(techDetails);

    return (
        <Paper
            elevation={8}
            sx={{
                p: { xs: 3, sm: 5 },
                maxWidth: 960,
                mx: "auto",
                borderRadius: 4,
                backgroundColor: theme.palette.mode === "light" ? "#f5f9ff" : "#1c2033",
                boxShadow:
                    theme.palette.mode === "light"
                        ? "0 8px 20px rgba(191, 164, 79, 0.15)"
                        : "0 8px 30px rgba(191, 164, 79, 0.6)",
                userSelect: "none",
            }}
        >
            <Typography
                variant="h5"
                fontWeight="bold"
                mb={4}
                textAlign="center"
                color="text.primary"
                sx={{
                    letterSpacing: 1,
                    textShadow:
                        theme.palette.mode === "dark"
                            ? "0 0 6px rgba(191,164,79,0.7)"
                            : "none",
                }}
            >
                Tecnologías
            </Typography>

            <Stack
                direction="row"
                spacing={{ xs: 2, sm: 4 }}
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                sx={{ gap: { xs: 2, sm: 3 } }}
            >
                {allTechnologies.map((tech) => {
                    const techDetail = techDetails[tech];
                    const nivelColor = getNivelColor(techDetail.nivel);
                    const contrastText = theme.palette.getContrastText(techDetail.color);

                    return (
                        <Tooltip key={tech} title={`${techDetail.label} — Nivel: ${techDetail.nivel}%`} arrow>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: 140,
                                    maxWidth: "100%",
                                    cursor: "default",
                                    borderRadius: 3,
                                    boxShadow: theme.palette.mode === "light"
                                        ? `0 6px 12px rgba(191,164,79,0.15)`
                                        : `0 6px 18px rgba(191,164,79,0.5)`,
                                    backgroundColor: techDetail.color + "dd",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.15)",
                                        boxShadow: `0 10px 28px ${nivelColor}cc`,
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    px: 2,
                                    py: 1.2,
                                    gap: 2,
                                    userSelect: "none",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={techDetail.iconUrl}
                                    alt={techDetail.label}
                                    loading="lazy"
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 1,
                                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
                                        flexShrink: 0,
                                    }}
                                />

                                <Typography
                                    variant="subtitle1"
                                    noWrap
                                    sx={{
                                        fontWeight: 700,
                                        color: contrastText,
                                        flexGrow: 1,
                                        userSelect: "text",
                                        fontSize: { xs: "0.9rem", sm: "1rem" },
                                    }}
                                    title={techDetail.label}
                                >
                                    {techDetail.label}
                                </Typography>

                                {/* Barra de nivel debajo */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        height: 6,
                                        width: `${techDetail.nivel}%`,
                                        borderRadius: "0 0 12px 12px",
                                        backgroundColor: nivelColor,
                                        boxShadow: `0 0 12px ${nivelColor}cc`,
                                        transition: "width 0.4s ease",
                                    }}
                                />
                            </Box>
                        </Tooltip>
                    );
                })}
            </Stack>
        </Paper>
    );
}