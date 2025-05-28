import React from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import PERSONAL_PHOTO from "../assets/img/JHOMT.png";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 6, md: 12 },
                px: { xs: 3, md: 6 },
                maxWidth: 1000,
                mx: "auto",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: { xs: 6, md: 10 },
            }}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Imagen con marco y sombra */}
            <motion.div
                variants={itemVariants}
                style={{
                    flexShrink: 0,
                    maxWidth: isMobile ? 250 : 350,
                    borderRadius: 24,
                    overflow: "hidden",
                    boxShadow: theme.shadows[10],
                    cursor: "default",
                    transition: "transform 0.3s ease",
                }}
                whileHover={{ scale: 1.05 }}
            >
                <Box
                    component="img"
                    src={PERSONAL_PHOTO}
                    alt="Jhon Mendoza"
                    sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: 24,
                        userSelect: "none",
                    }}
                />
            </motion.div>

            {/* Texto en tarjeta con línea dorada */}
            <Paper
                elevation={6}
                component={motion.div}
                variants={itemVariants}
                sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: 4,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.shadows[15],
                    position: "relative",
                    flex: 1,
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        left: 24,
                        top: 32,
                        bottom: 32,
                        width: 6,
                        borderRadius: 3,
                        backgroundColor: theme.palette.primary.main,
                    },
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: "900",
                        letterSpacing: 1.5,
                        fontFamily: "'Poppins', sans-serif",
                        color: theme.palette.primary.main,
                        pl: 3,
                    }}
                >
                    Sobre mí
                </Typography>

                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        fontSize: "1.125rem",
                        lineHeight: 1.7,
                        color: theme.palette.text.primary,
                        pl: 3,
                        fontFamily: "'Roboto', sans-serif",
                    }}
                >
                    Soy un desarrollador apasionado por crear experiencias web modernas, interactivas y accesibles. Me especializo en React, Material UI y animaciones con Framer Motion.
                </Typography>

                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        fontSize: "1.125rem",
                        lineHeight: 1.7,
                        color: theme.palette.text.primary,
                        pl: 3,
                        fontFamily: "'Roboto', sans-serif",
                    }}
                >
                    Me gusta escribir código limpio, mantener buenas prácticas y aprender constantemente nuevas tecnologías para mejorar mis proyectos.
                </Typography>
            </Paper>
        </Box>
    );
}