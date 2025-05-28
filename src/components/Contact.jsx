import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validate = () => {
        let tempErrors = { name: "", email: "", message: "" };
        let isValid = true;

        if (!form.name.trim()) {
            tempErrors.name = "El nombre es obligatorio";
            isValid = false;
        }
        if (!form.email.trim()) {
            tempErrors.email = "El email es obligatorio";
            isValid = false;
        } else if (!validateEmail(form.email)) {
            tempErrors.email = "Ingresa un email válido";
            isValid = false;
        }
        if (!form.message.trim()) {
            tempErrors.message = "El mensaje es obligatorio";
            isValid = false;
        } else if (form.message.trim().length < 10) {
            tempErrors.message = "El mensaje debe tener al menos 10 caracteres";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Formulario enviado!");
            setForm({ name: "", email: "", message: "" });
        }
    };

    return (
        <Paper
            elevation={6}
            sx={{
                maxWidth: 600,
                mx: "auto",
                mt: 10,
                px: { xs: 3, sm: 6 },
                py: { xs: 4, sm: 6 },
                borderRadius: 3,
                backgroundColor: "background.paper",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Typography
                variant="h4"
                component="h2"
                textAlign="center"
                mb={4}
                sx={{ fontWeight: "700", letterSpacing: 1 }}
            >
                Contacto
            </Typography>

            <form noValidate onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    sx={{
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            boxShadow: errors.name
                                ? "0 0 6px #f44336aa"
                                : "0 0 5px rgba(25,118,210,0.3)",
                            transition: "box-shadow 0.3s ease",
                        },
                    }}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    sx={{
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            boxShadow: errors.email
                                ? "0 0 6px #f44336aa"
                                : "0 0 5px rgba(25,118,210,0.3)",
                            transition: "box-shadow 0.3s ease",
                        },
                    }}
                />
                <TextField
                    label="Mensaje"
                    name="message"
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    sx={{
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            boxShadow: errors.message
                                ? "0 0 6px #f44336aa"
                                : "0 0 5px rgba(25,118,210,0.3)",
                            transition: "box-shadow 0.3s ease",
                        },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{
                        mt: 4,
                        py: 1.5,
                        fontWeight: "700",
                        letterSpacing: 1,
                        borderRadius: 3,
                        textTransform: "uppercase",
                        boxShadow: "0 5px 15px rgba(25,118,210,0.4)",
                        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#155fa0",
                            boxShadow: "0 8px 25px rgba(21,95,160,0.6)",
                        },
                    }}
                >
                    Enviar
                </Button>
            </form>
        </Paper>
    );
}