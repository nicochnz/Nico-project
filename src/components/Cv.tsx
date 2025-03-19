import { ArrowUpward, Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function CV() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
				textAlign: "center",
				backgroundColor: "#F79E6B",
				padding: 2,
			}}
		>
			<Box id="home" />
			<Typography variant="h4" color="text.primary" fontWeight="bold">
				More about me
			</Typography>

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
				sx={{ backgroundColor: "rgb(248, 240, 212)" }}
				startIcon={<Download />}
				href="/LAST CV CHICHE NICOLAS DEV WEB.pdf"
				download="CV_Nicolas_Chiche.pdf"
			>
				Download (PDF)
			</Button>

			<Button
				variant="contained"
				sx={{ backgroundColor: "rgb(248, 240, 212)", marginTop: 2 }}
				startIcon={<ArrowUpward />}
				onClick={() => {
					document
						.getElementById("home")
						?.scrollIntoView({ behavior: "smooth" });
				}}
			>
				Back to homepage
			</Button>
		</Box>
	);
}
