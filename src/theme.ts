// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: { main: "#F79E6B" },
		secondary: { main: "#ff4081" },
		background: { default: "#0a192f", paper: "#112240" },
		text: { primary: "#36342E", secondary: "#8892b0" },
	},
	typography: {
		fontFamily: "'Oswald', sans-serif",
		h1: { fontSize: "3rem", fontWeight: 700 },
		h2: { fontSize: "2rem", fontWeight: 600 },
		body1: { fontSize: "1.1rem", lineHeight: 1.5 },
	},
});
