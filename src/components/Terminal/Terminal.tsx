import { useState } from "react";
import "./Terminal.css";

const words = ["react", "server", "frontend", "backend", "typescript", "developer"];

const TerminalPortfolio = () => {
  const [history, setHistory] = useState<string[]>([
    "Welcome to my portfolio! Enter 'help' to see the commands."
  ]);
  const [input, setInput] = useState("");
  const [hangmanWord, setHangmanWord] = useState<string | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);

  const maxWrongGuesses = 5;

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "- about",
      "- skills",
      "- education",
      "- contact",
      "- hangman",
      "- clear",
    ],
    about: [
      "I'm Nicolas, a former lifeguard turned web developer.",
      "Passionate about coding and problem-solving.",
      "Want to know my skills? Type 'skills'.",
    ],
    skills: [
      "Javascript ➕ React ➕ TypeScript ➕ Vitejs ➕ Nextjs ➕ Node.js ➕ Express",
      "➕ HTML/CSS ➕ MySQL ",
      "Want to know more about my journey? Type 'education'.",
    ],
    education: [
      "Trained at Wild Code School - Intensive web development program.",
      "Self-taught through projects, challenges, and continuous learning.",
      "Want to reach out? Type 'contact'.",
    ],
    contact: [
      "💻 Email: chiche.nicolas@gmail.com",
      "💻 LinkedIn: https://www.linkedin.com/in/nicolas-chiche-79903b2b0/",
      "💻 Github: https://github.com/nicochnz",
    ],
    clear: [],
  };

  const handleCommand = () => {
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;

    if (trimmedInput === "clear") {
      setHistory([]);
    } else if (trimmedInput === "hangman") {
      startHangman();
    } else if (hangmanWord && trimmedInput.length === 1 && /^[a-z]$/.test(trimmedInput)) {
      handleHangmanGuess(trimmedInput);
    } else {
      const output = commands[trimmedInput] || ["❌ Command not found. Type 'help' to see available commands."];
      setHistory([...history, `> ${input}`, ...output]);
    }
    setInput("");
  };

  const startHangman = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setHangmanWord(word);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setHistory([...history, "> hangman", "🎮 Dev Hangman started! Guess one letter at a time."]);
  };

  const handleHangmanGuess = (letter: string) => {
    if (!hangmanWord) return;
    if (guessedLetters.includes(letter)) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!hangmanWord.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      if (newWrongGuesses >= maxWrongGuesses) {
        setHistory([...history, `> ${letter}`, `💀 You lost! The word was '${hangmanWord}'.`, "Oh, too bad! But at least you found out that Nicolas is looking for an internship! Hire him! "]);
        setHangmanWord(null);
        return;
      }
    }

    const displayWord = hangmanWord.split('').map(l => (newGuessedLetters.includes(l) ? l : '_')).join(' ');
    setHistory([...history, `> ${letter}`, displayWord]);

    if (!displayWord.includes("_")) {
      setHistory([...history, `> ${letter}`, `🎉 Congrats! You found the word '${hangmanWord}'! Nicolas is as sharp as your skills!`]);
      setHangmanWord(null);
    }
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
            <div key={index}> <div key={index}>
            {line.includes("http") ? (
              <a href={line.split(" ").pop()} target="_blank" rel="noopener noreferrer" className="terminal-link">
                {line}
              </a>
            ) : (
              line
            )}
          </div></div>
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
