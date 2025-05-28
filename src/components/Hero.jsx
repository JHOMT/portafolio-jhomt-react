import React from "react";
import { Box, Typography, Button, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IMAGE_PERSON from "../assets/img/JHOMT_PERSON_TRANSPARENT.png";

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconVariants = {
    hover: { scale: 1.3, color: "#e2b84f", transition: { duration: 0.3 } },
};

export default function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Fondo oscuro con overlay de gradiente para profundidad
    const bgGradient = `linear-gradient(135deg, rgba(15,15,20,0.85) 0%, rgba(25,20,40,0.95) 100%)`;

    // Color de texto dorado y blanco para buen contraste
    const titleColor = "#e2b84f";
    const subtitleColor = theme.palette.text.secondary;

    return (
        <Box
            id="home"
            sx={{
                minHeight: "calc(100vh - 64px)",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                px: { xs: 3, md: 10 },
                py: { xs: 4, md: 10 },
                background: bgGradient,
                borderRadius: 4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
                color: subtitleColor,
                overflow: "visible",
            }}
        >
            {/* Texto y botones alineados a la izquierda */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ flex: 1, maxWidth: 600, textAlign: "left" }}
            >
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: "900",
                            letterSpacing: 2,
                            color: titleColor,
                            lineHeight: 1.2,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        ¡Hola! Soy Jhon Mendoza
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 4,
                            opacity: 0.9,
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            fontFamily: "'Roboto', sans-serif",
                        }}
                    >
                        Ingeniero en sistemas e informática. Desarrollo soluciones completas con frontend, backend, bases de datos y análisis de datos para impulsar tus proyectos.
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Button
                        variant="contained"
                        href="#contact"
                        size="large"
                        sx={{
                            backgroundColor: titleColor,
                            color: "#1a1a1a",
                            fontWeight: "bold",
                            px: 6,
                            py: 1.8,
                            borderRadius: 8,
                            boxShadow: `0 6px 15px ${titleColor}88`,
                            "&:hover": {
                                backgroundColor: "#c6a842",
                                boxShadow: `0 8px 25px ${titleColor}bb`,
                            },
                            transition: "all 0.3s ease",
                        }}
                        component={motion.button}
                        whileHover={{ scale: 1.07 }}
                    >
                        Contacta conmigo
                    </Button>
                </motion.div>

                {/* Iconos sociales alineados a la izquierda */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        marginTop: 40,
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: 28,
                        color: titleColor,
                    }}
                >
                    {[
                        {
                            icon: <GitHubIcon fontSize="large" />,
                            href: "https://github.com/jhonmendoza",
                            label: "GitHub",
                        },
                        {
                            icon: <LinkedInIcon fontSize="large" />,
                            href: "https://linkedin.com/in/jhonmendoza",
                            label: "LinkedIn",
                        },
                        {
                            icon: <EmailIcon fontSize="large" />,
                            href: "mailto:jhon@example.com",
                            label: "Email",
                        },
                    ].map(({ icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            variants={iconVariants}
                            whileHover="hover"
                            style={{ color: "inherit" }}
                        >
                            <IconButton size="large" sx={{ color: "inherit" }}>
                                {icon}
                            </IconButton>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Imagen con cuadros flotantes */}
            <Box
                sx={{
                    flex: 1,
                    position: "relative",
                    maxWidth: isMobile ? "100%" : 650,
                    height: isMobile ? 300 : "100%",
                    borderRadius: 4,
                    overflow: "visible",
                    boxShadow: theme.shadows[20],
                    marginLeft: isMobile ? 0 : 6,
                    marginTop: isMobile ? 6 : 0,
                }}
            >
                <motion.img
                    src={IMAGE_PERSON}
                    alt="Jhon Mendoza"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 20,
                        userSelect: "none",
                    }}
                />

                {/* Cuadros flotantes */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 20,
                        left: isMobile ? "5%" : "-10%",
                        width: 250,
                        p: 3,
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        boxShadow: theme.shadows[24],
                        borderRadius: 4,
                        cursor: "default",
                        zIndex: 10,
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.1)" },
                        color: theme.palette.primary.main,
                    }}
                >
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Frontend
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                        Interfaces modernas y responsivas con React y Material UI.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        top: "45%",
                        left: isMobile ? "50%" : "-12%",
                        transform: isMobile ? "translateX(-50%)" : "none",
                        width: 250,
                        p: 3,
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        boxShadow: theme.shadows[24],
                        borderRadius: 4,
                        cursor: "default",
                        zIndex: 10,
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.1)" },
                        color: theme.palette.primary.main,
                    }}
                >
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Backend
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                        Servicios robustos y escalables con Node.js y bases de datos.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        bottom: 20,
                        right: isMobile ? "5%" : "-8%",
                        width: 250,
                        p: 3,
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        boxShadow: theme.shadows[24],
                        borderRadius: 4,
                        cursor: "default",
                        zIndex: 10,
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.1)" },
                        textAlign: "right",
                        color: theme.palette.primary.main,
                    }}
                >
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Análisis de Datos
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                        Insights para mejorar la toma de decisiones empresariales.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
