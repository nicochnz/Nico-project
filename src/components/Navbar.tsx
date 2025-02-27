import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setShow(currentScrollY < lastScrollY);
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<header className={`header ${show ? "header-visible" : "header-hidden"}`}>
			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
