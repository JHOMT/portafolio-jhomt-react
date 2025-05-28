import React from "react";
import {
    Box,
    Container,
    Typography,
    IconButton,
    Stack,
    Link,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LogoImage from "../assets/img/LOGO_JHOMT_TRANSPARENT_500.png"; // tu logo aquí

const iconVariants = {
    hover: {
        scale: 1.3,
        color: "#e2b84f",
        transition: { type: "spring", stiffness: 300 },
    },
};

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor:
                    theme.palette.mode === "light" ? "#fdf9f0" : theme.palette.background.paper,
                borderTop: `4px solid ${theme.palette.primary.main}`,
                py: 5,
                mt: 10,
                boxShadow:
                    theme.palette.mode === "light"
                        ? "0 -2px 10px rgba(191,164,79,0.1)"
                        : "0 -2px 15px rgba(191,164,79,0.5)",
                transition: "background-color 0.3s ease",
            }}
        >
            <Container maxWidth="lg" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", gap: 3 }}>
                {/* Logo + Nombre */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        cursor: "default",
                    }}
                >
                    <Box
                        component="img"
                        src={LogoImage}
                        alt="Logo JHOMT"
                        sx={{ height: 50, width: 50, objectFit: "contain" }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: theme.palette.primary.main,
                            userSelect: "none",
                            letterSpacing: "0.15rem",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        JHOMT
                    </Typography>
                </Box>

                {/* Texto copyright */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ userSelect: "none", textAlign: { xs: "center", sm: "left" } }}
                >
                    © {new Date().getFullYear()} Jhon Mendoza. Todos los derechos reservados.
                </Typography>

                {/* Redes sociales con animación */}
                <Stack direction="row" spacing={2} justifyContent="center">
                    {[{
                        icon: <GitHubIcon />,
                        href: "https://github.com/jhonmendoza",
                        label: "GitHub",
                    },{
                        icon: <LinkedInIcon />,
                        href: "https://linkedin.com/in/jhonmendoza",
                        label: "LinkedIn",
                    },{
                        icon: <EmailIcon />,
                        href: "mailto:jhon@example.com",
                        label: "Email",
                    }].map(({ icon, href, label }) => (
                        <motion.div
                            key={label}
                            whileHover="hover"
                            variants={iconVariants}
                            style={{ display: "inline-block" }}
                        >
                            <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label} color="inherit" underline="none">
                                <IconButton
                                    size="large"
                                    sx={{
                                        color: theme.palette.mode === "light" ? "#3c3c3c" : "#bfa44f",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {icon}
                                </IconButton>
                            </Link>
                        </motion.div>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}