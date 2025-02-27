import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Homepage() {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				textAlign: "center",
				backgroundColor: "background.default",
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
					<span style={{ color: "#64ffda" }}>Hi, I'm a French developer</span>
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
								borderColor: "text.secondary",
								borderRadius: 1,
								padding: "4px 8px",
								color: "text.secondary",
								fontSize: "1.25rem",
							}}
						>
							{skill}
						</Box>
					))}
				</Box>
			</motion.div>
		</Box>
	);
}
