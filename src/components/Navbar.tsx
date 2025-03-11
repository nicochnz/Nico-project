import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {

  return (
    <header >
      <nav>
        <ul>
  
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="terminal" smooth={true} duration={500}>Terminal</Link>
          </li>
					<li>
            <Link to="CV" smooth={true} duration={500}>CV</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
