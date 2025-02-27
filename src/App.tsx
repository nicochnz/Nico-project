import { ThemeProvider } from "@emotion/react";
import Homepage from "./components/Homepage";
import { theme } from "./theme";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<main>
				<Homepage />
			</main>
		</ThemeProvider>
	);
}

export default App;
