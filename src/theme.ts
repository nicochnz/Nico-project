// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: { main: "#1e88e5" },
		secondary: { main: "#ff4081" },
		background: { default: "#0a192f", paper: "#112240" },
		text: { primary: "#ccd6f6", secondary: "#8892b0" },
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
		h1: { fontSize: "3rem", fontWeight: 700 },
		h2: { fontSize: "2rem", fontWeight: 600 },
		body1: { fontSize: "1.1rem", lineHeight: 1.5 },
	},
});
