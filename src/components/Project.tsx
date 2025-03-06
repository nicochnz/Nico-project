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
		image: "src/assets/images/Projet1(1).png",
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
		image: "src/assets/images/Projet2(4).png",
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
		"image": "src/assets/images/Projet3.png",
		"description":
			"Development of an MVP for a user journey application, designed to help users plan vacations or weekends by selecting hotels, restaurants, and activities.",
		"stacks": ["CSS", "TypeScript", "React", "Express", "MySQL"],
		"skillsdeveloped":
			"This project allowed me to gain experience in full-stack development, database design, and API integration. Working with real clients was a significant challenge, helping me improve my ability to adapt to requirements, and communicate effectively",
		"link": "/src/assets/images/video/Veever parcours.mp4"
	}
];

export function Projects() {
	return (
		<Box sx={{ my: 6 }}>
			<Typography
				variant="h4"
				fontSize={60}
				padding={5}
				color="text.secondary"
				textAlign="center"
				gutterBottom
			>
				My projects
			</Typography>
			<Grid container spacing={3}>
				{projects.map((project) => (
				<Grid item xs={12} sm={6} md={4} key={project.id}>
				<Card sx={{ backgroundColor: "background.paper", height: "100%", display: "flex", flexDirection: "column" }}>
					<CardMedia component="img" height="230" image={project.image} sx={{ marginBottom: 4 }} />
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography variant="h6" textAlign={"center"} sx={{ mt: 2, mb: 2 }}>
							{project.title}
						</Typography>
						<Typography variant="body2">{project.description}</Typography>
						<Typography variant="subtitle2" sx={{ mt: 2 }}>
							<b>Stacks:</b> {project.stacks.join(", ")}
						</Typography>
						<Typography variant="subtitle2" sx={{ mt: 2 }}>
							<b>Skills developed:</b> {project.skillsdeveloped}
						</Typography>
					</CardContent>
					<Box sx={{ display: "flex", justifyContent: "center", mt: "auto", mb: 2 }}>
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							sx={{ display: "block", textAlign: "center" }}
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
