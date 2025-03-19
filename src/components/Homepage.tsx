import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Homepage() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				textAlign: "center",
				backgroundColor: "#F79E6B",
				fontFamily: "'Source Sans 3', sans-serif",
				position: "relative",
			}}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Typography variant="h1" color="text.primary">
					Chiche Nicolas
					<br />
					<span style={{ color: "rgb(248, 240, 212)" }}>
						Hi, I'm a French developer
					</span>
				</Typography>
				<Box
					sx={{
						display: "flex",
						gap: 1,
						flexWrap: "wrap",
						justifyContent: "center",
						mt: 2,
					}}
				>
					{[
						"html",
						"css",
						"javascript",
						"react",
						"typescript",
						"git",
						"express",
						"nodejs",
						"mysql",
					].map((skill) => (
						<Box
							key={skill}
							sx={{
								border: "1px solid",
								borderColor: "text.primary",
								borderRadius: 1,
								padding: "4px 8px",
								color: "text.primary",
								fontSize: "1.25rem",
								fontFamily: "'Source Sans 3', sans-serif",
							}}
						>
							{skill}
						</Box>
					))}
				</Box>
			</motion.div>
			<Navbar />
		</Box>
	);
}
