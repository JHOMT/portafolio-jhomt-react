import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    List,
    ListItemText,
    Button,
    useTheme,
    useMediaQuery,
    ListItemButton,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/img/LOGO_JHOMT_TRANSPARENT_500.png";
import { useThemeContext } from "../context/ThemeProvider";

const navItems = [
    { label: "Home", icon: <HomeIcon />, href: "#home" },
    { label: "About", icon: <InfoIcon />, href: "#about" },
    { label: "Projects", icon: <WorkIcon />, href: "#projects" },
    { label: "Contact", icon: <ContactMailIcon />, href: "#contact" },
];

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { mode, toggleColorMode } = useThemeContext();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const drawerId = "mobile-navigation-drawer";

    const drawerVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0 },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5 },
    };

    // Detecta el hash activo para marcar el menú activo (se puede mejorar con react-router)
    const currentHash = typeof window !== "undefined" ? window.location.hash : "";

    return (
        <>
            <AppBar
                position="sticky"
                elevation={scrolled ? 12 : 0}
                sx={{
                    backdropFilter: "blur(15px)",
                    backgroundColor: scrolled
                        ? theme.palette.background.paper + "ee"
                        : "transparent",
                    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                    borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : "none",
                    color: theme.palette.text.primary,
                    zIndex: (theme) => theme.zIndex.drawer + 10,
                    width: "100%",
                    px: { xs: 1, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: 1300,
                        width: "100%",
                        px: 0,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Logo y título */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                            component="img"
                            src={LOGO}
                            alt="Logo"
                            sx={{ height: 48, width: 48, objectFit: "contain" }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                letterSpacing: 1.2,
                                userSelect: "none",
                                fontFamily: "'Poppins', sans-serif",
                                color: theme.palette.text.primary,
                            }}
                        >
                            JHOMT
                        </Typography>
                    </Box>

                    {/* Desktop menu */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
                            {navItems.map(({ label, href }) => {
                                const active = currentHash === href;
                                return (
                                    <Button
                                        key={label}
                                        href={href}
                                        aria-current={active ? "page" : undefined}
                                        sx={{
                                            color: active
                                                ? theme.palette.primary.main
                                                : theme.palette.text.secondary,
                                            fontWeight: active ? 700 : 600,
                                            letterSpacing: 0.8,
                                            fontSize: "1rem",
                                            px: 2,
                                            py: 1,
                                            borderRadius: 2,
                                            backgroundColor: active
                                                ? theme.palette.primary.light + "cc"
                                                : "transparent",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.light + "bb",
                                                color: theme.palette.primary.dark,
                                            },
                                        }}
                                    >
                                        {label}
                                    </Button>
                                );
                            })}

                            {/* Botón toggle tema */}
                            <IconButton
                                onClick={toggleColorMode}
                                color="inherit"
                                aria-label="toggle theme"
                                sx={{
                                    ml: 3,
                                    borderRadius: 2,
                                    p: 1,
                                    transition: "background-color 0.3s ease",
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.mode === "light"
                                                ? theme.palette.primary.light + "33"
                                                : theme.palette.primary.dark + "33",
                                    },
                                }}
                            >
                                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
                            </IconButton>
                        </Box>
                    )}

                    {/* Mobile menu */}
                    {isMobile && (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <IconButton
                                onClick={toggleColorMode}
                                color="inherit"
                                aria-label="toggle theme"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    borderRadius: 2,
                                    p: 1,
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.mode === "light"
                                                ? theme.palette.primary.light + "33"
                                                : theme.palette.primary.dark + "33",
                                    },
                                }}
                            >
                                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
                            </IconButton>

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="open menu"
                                aria-controls={drawerId}
                                aria-expanded={drawerOpen}
                                onClick={toggleDrawer}
                                size="large"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    ml: 1,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer móvil */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={overlayVariants}
                            transition={{ duration: 0.3 }}
                            onClick={toggleDrawer}
                            style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor:
                                    theme.palette.mode === "light"
                                        ? "rgba(0,0,0,0.15)"
                                        : "rgba(0,0,0,0.7)",
                                zIndex: 1200,
                            }}
                        />

                        {/* Drawer */}
                        <motion.nav
                            id={drawerId}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={drawerVariants}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                height: "100vh",
                                width: 280,
                                backgroundColor: theme.palette.background.paper,
                                color: theme.palette.text.primary,
                                zIndex: 1300,
                                paddingTop: 70,
                                boxShadow: theme.shadows[5],
                                display: "flex",
                                flexDirection: "column",
                            }}
                            aria-label="mobile navigation drawer"
                        >
                            <IconButton
                                onClick={toggleDrawer}
                                sx={{
                                    position: "absolute",
                                    top: 10,
                                    right: 10,
                                    color: theme.palette.text.primary,
                                }}
                                aria-label="close menu"
                                size="large"
                            >
                                <CloseIcon />
                            </IconButton>

                            <List>
                                {navItems.map(({ label, icon, href }) => (
                                    <ListItemButton
                                        component="a"
                                        href={href}
                                        key={label}
                                        onClick={() => setDrawerOpen(false)}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            px: 3,
                                            py: 1.5,
                                            fontWeight: 600,
                                            fontSize: "1.1rem",
                                            color: theme.palette.text.secondary,
                                            "&:hover": {
                                                backgroundColor: theme.palette.action.hover,
                                                color: theme.palette.primary.main,
                                            },
                                        }}
                                    >
                                        {icon}
                                        <ListItemText primary={label} />
                                    </ListItemButton>
                                ))}
                            </List>

                            <Box sx={{ flexGrow: 1 }} />
                            <Divider sx={{ borderColor: theme.palette.divider }} />
                            <Box
                                sx={{
                                    px: 3,
                                    py: 2,
                                    fontSize: "0.875rem",
                                    color: theme.palette.text.secondary,
                                    textAlign: "center",
                                }}
                            >
                                © {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.
                            </Box>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}