import React from "react";
import {Box, CssBaseline} from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechChips from "./components/TechChips";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <main style={{ width: "100%" }}>
                <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 } }}>
                    <Hero />
                    <About />
                    <Projects />
                    <TechChips />
                    <Contact />
                    <Footer />
                </Box>
            </main>
        </>
    );
}