import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Link,
	Typography,
} from "@mui/material";

const projects = [
	{
		id: 1,
		title: "Bordeaux Quizz",
		image: "/assets/images/Projet1(m).png",
		description:
			"Development of an interactive quiz about Bordeaux with two difficulty levels (easy and hard). Built with HTML, CSS, and JavaScript.",
		stacks: ["HTML", "CSS", "JavaScript"],
		skillsdeveloped:
			"This project allowed me to strengthen my JavaScript fundamentals, improve code organization, efficiently manipulate the DOM, and enhance my project management skills within a set timeframe.",
		link: "https://bdxquizz.netlify.app/",
	},
	{
		id: 2,
		title: "Smash-Cards",
		image: "/assets/images/Projet2(m).png",
		description:
			"Development of a memory game themed around Super Smash Bros, completed in one month using CSS, React, TypeScript, and Express.",
		stacks: ["CSS", "Typescript", "React", "Express"],
		skillsdeveloped:
			"This project allowed me to enhance my skills in React, master API data fetching, efficiently organize my code, and collaborate within a team. I also learned to use npm packages and implement React Router.",
		link: "https://www.youtube.com/watch?v=ciQKhZ8PEko",
	},
	{
		"id": 3,
		"title": "Veever",
		"image": "/assets/images/Projet3.png",
		"description":
			"Development of an MVP for a user journey application, designed to help users plan vacations or weekends by selecting hotels, restaurants, and activities.",
		"stacks": ["CSS", "TypeScript", "React", "Express", "MySQL"],
		"skillsdeveloped":
			"This project allowed me to gain experience in full-stack development, database design, and API integration. Working with real clients was a significant challenge, helping me improve my ability to adapt to requirements, and communicate effectively",
		"link": "/assets/images/video/Veever parcours.mp4"
	}
];

export function Projects() {
	return (
		<Box sx={{ my: 6, px: 4, backgroundColor:"#E0D5AD"}}>

			<Typography
				variant="h4"
				fontSize={60}
				padding={5}
				color="text.primary"
				fontWeight="bold"
				textAlign="center"
				gutterBottom
				sx={{ fontFamily: "'Oswald', sans-serif" }}
			>
				My school projects
			</Typography>
			<Grid container spacing={3}>
				{projects.map((project) => (
				<Grid item xs={12} sm={6} md={4} key={project.id} sx={{ padding: 2 }}>

<Card sx={{ 
	backgroundColor: "#F79E6B", 
	height: "100%", 
	display: "flex", 
	flexDirection: "column", 
	width: "90%",
	margin: "auto"
}}>

					<CardMedia component="img" height="250" image={project.image} sx={{ marginBottom: 4 }} />
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography variant="h6" textAlign={"center"}  sx={{ mb: 2 ,fontSize:"2rem", fontWeight: "bold", color:"rgb(248, 240, 212)"}}>
							{project.title}
						</Typography>
						<Typography variant="body2" sx={{ fontSize: "1rem" }}>{project.description}</Typography>
						<Typography variant="subtitle2" sx={{ mt: 2, fontSize: "1rem" }}>
							<b>Stacks:</b> {project.stacks.join(", ")}
						</Typography>
						<Typography variant="subtitle2" sx={{ mt: 2, fontSize: "1rem" }}>
							<b>Skills developed:</b> {project.skillsdeveloped}
						</Typography>
					</CardContent>
					<Box sx={{ display: "flex", justifyContent: "center", mt: "auto", mb: 2 }}>
					<Link
	href={project.link}
	target="_blank"
	rel="noopener noreferrer"
	sx={{
		display: "inline-block",
		textAlign: "center",
		backgroundColor: "rgb(248, 240, 212)", 
		color: "black",
		padding: "8px 16px",
		borderRadius: "8px",
		textDecoration: "none",
		fontWeight: "bold",
		transition: "0.3s",
		"&:hover": {
			backgroundColor: "#5B584F", 
			boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
		},
		   fontFamily: "'Source Sans 3', sans-serif"
	}}
>
	Discover-it
</Link>

					</Box>
				</Card>
			</Grid>
			
				))}
			</Grid>
		</Box>
	);
}
