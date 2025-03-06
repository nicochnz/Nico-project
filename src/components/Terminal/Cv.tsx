import { Box, Button, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";

export default function CV() {
	return (
		<Box
			sx={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
				textAlign: "center",
				backgroundColor: "background.default",
				padding: 2,
			}}
		>
			<Typography variant="h4" color="text.primary">
				Mon CV
			</Typography>

			{/* Affichage de l'image du CV */}
			<Box
				sx={{
					width: "80%",
					height: "70vh",
					overflow: "hidden",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					src="cv.jpg" 
					alt="CV de Nicolas Chiche"
					style={{ width: "100%", height: "100%", objectFit: "contain" }}
				/>
			</Box>

			<Button
				variant="contained"
				color="primary"
				startIcon={<Download />}
				href="/LAST CV CHICHE NICOLAS DEV WEB.pdf"
				download="CV_Nicolas_Chiche.pdf"
			>
				Télécharger le CV (PDF)
			</Button>
		</Box>
	);
}
