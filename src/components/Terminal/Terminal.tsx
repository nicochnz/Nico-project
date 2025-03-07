import { useState } from "react";
import "./Terminal.css";

const TerminalPortfolio = () => {
  const [history, setHistory] = useState<string[]>(["Welcome to my portfolio ! Enter 'help' to see the commands"]);
  const [input, setInput] = useState("");

  const commands: Record<string, string[]> = {
    help: ["Available commands", "- about", "- skills", "- contact", "- clear"],
    about: ["I'm Nicolas, a former lifeguard who discovered a passion for web development through self-learning. I started coding on my own, driven by curiosity, and quickly realized how much I enjoyed creating and solving problems through code. This passion led me to join a training program to deepen my knowledge and refine my skills. Today, after completing my training, I’m looking for an apprenticeship to continue learning, gain hands-on experience, and take my first steps in the industry."],
    skills: ["Javascript, React, TypeScript, Node.js, Html, Css, Express, Mysql."],
    contact: ["Email: chiche.nicolas@gmail.com", "LinkedIn: https://www.linkedin.com/in/nicolas-chiche-79903b2b0/", "Github: https://github.com/nicochnz"],
    clear: [],
  };

  const handleCommand = () => {
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;
    
    if (trimmedInput === "clear") {
      setHistory([]);
    } else {
      const output = commands[trimmedInput] || ["Command not found. Type 'help' to see available commands."];
      setHistory([...history, `> ${input}`, ...output]);
    }
    setInput("");
  };

  return (
    <div className="terminal-wrapper">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <span className="terminal-title">Terminal</span>
      </div>
      <div className="terminal-container">
      <div className="terminal-output">
  {history.map((line, index) => (
    <div key={index}>
      {line.includes("http") || line.includes("www") ? (

        <a href={line.split(" ").pop()} target="_blank" rel="noopener noreferrer" className="terminal-link">
          {line}
        </a>
      ) : (
        line
      )}
    </div>
  ))}
  <div className="terminal-input-line">
    <span className="terminal-prompt">$</span>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleCommand()}
      className="terminal-input"
    />
  </div>
</div>


      </div>
    </div>
  );
};

export default TerminalPortfolio;
