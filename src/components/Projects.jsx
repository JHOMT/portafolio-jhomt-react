import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Tooltip,
    Button,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import projects from "../data/Projects.js";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
    const theme = useTheme();

    return (
        <Box
            id="projects"
            sx={{ py: 8, px: { xs: 2, sm: 3, md: 5 }, maxWidth: 1200, mx: "auto" }}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 6, textAlign: "center" }}
            >
                Proyectos
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {projects.map(
                    ({ title, description, imageName, technologiesNames, link }, i) => (
                        <Grid
                            item
                            xs={12}
                            sm={10}
                            md={8}
                            key={i}
                            sx={{ display: "flex", justifyContent: "center" }}
                        >
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.02 }}
                                style={{ width: "100%" }}
                            >
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "row" },
                                        borderRadius: 4,
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                                        overflow: "hidden",
                                        cursor: link ? "pointer" : "default",
                                        transition: "box-shadow 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0 20px 50px rgba(191,164,79,0.3)",
                                        },
                                    }}
                                >
                                    {/* Imagen */}
                                    {imageName ? (
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: { xs: "100%", sm: 280 },
                                                height: 190,
                                                objectFit: "cover",
                                            }}
                                            image={`/src/assets/img/${imageName}`}
                                            alt={title}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                width: { xs: "100%", sm: 280 },
                                                height: 190,
                                                bgcolor: "grey.200",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "bold",
                                                fontSize: 20,
                                            }}
                                        >
                                            Sin imagen
                                        </Box>
                                    )}

                                    {/* Contenido */}
                                    <CardContent
                                        sx={{
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            p: 3,
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: "bold",
                                                    mb: 1,
                                                    color: "text.primary",
                                                }}
                                            >
                                                {title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: "vertical",
                                                    mb: 2,
                                                }}
                                            >
                                                {description}
                                            </Typography>
                                        </Box>

                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            flexWrap="wrap"
                                            alignItems="center"
                                            sx={{ mb: 3 }}
                                        >
                                            {technologiesNames.map((techIconName) => {
                                                const techLabel = techIconName
                                                    .replace(".svg", "")
                                                    .toUpperCase();
                                                const iconSrc = `/src/assets/icons/${techIconName}`;
                                                return (
                                                    <Tooltip key={techIconName} title={techLabel} arrow>
                                                        <Box
                                                            component="img"
                                                            src={iconSrc}
                                                            alt={techLabel}
                                                            loading="lazy"
                                                            sx={{
                                                                width: 36,
                                                                height: 36,
                                                                borderRadius: 1,
                                                                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
                                                                transition: "transform 0.3s ease, filter 0.3s ease",
                                                                cursor: "default",
                                                                "&:hover": {
                                                                    transform: "scale(1.3)",
                                                                    filter:
                                                                        "drop-shadow(0 3px 8px rgba(191,164,79,0.8))",
                                                                },
                                                            }}
                                                        />
                                                    </Tooltip>
                                                );
                                            })}
                                        </Stack>

                                        {/* Botón ver proyecto */}
                                        {link && (
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(link, "_blank");
                                                }}
                                                sx={{
                                                    alignSelf: { xs: "center", sm: "flex-start" },
                                                    textTransform: "none",
                                                    fontWeight: "bold",
                                                    borderRadius: 2,
                                                    px: 4,
                                                    py: 1.2,
                                                    boxShadow: "0 2px 6px rgba(191,164,79,0.3)",
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        boxShadow: "0 6px 14px rgba(191,164,79,0.6)",
                                                        backgroundColor: theme.palette.primary.light,
                                                    },
                                                }}
                                            >
                                                Ver Proyecto
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    )
                )}
            </Grid>
        </Box>
    );
}