import { ThemeProvider } from "@emotion/react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Project";
import { theme } from "./theme";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<main>
				<Homepage />
				<Navbar />
				<Projects />
			</main>
		</ThemeProvider>
	);
}

export default App;
