import { ThemeProvider } from "@emotion/react";
import Homepage from "./components/Homepage";
import { Projects } from "./components/Project";
import { theme } from "./theme";
import "./index.css"
import TerminalPortfolio from "./components/Terminal/Terminal";
import CV from "./components/Cv";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
			<div id="home">
        <Homepage />
				</div>
        <div id="projects">
          <Projects />
        </div>
        <div id="terminal">
          <TerminalPortfolio />
        </div>
        <div id="CV">
        <CV/>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
