import { useState } from "react";
import data from "../../../data.json";

import "./NavBar.css"

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = data.Menu;

    return (
        <div className="navigation" style={{ backgroundColor: navigation.background }}>
            <div className="navigation-container">
                <div className="logo">
                    <img src='/images/logos/logo_colored.webp' alt="Logo de Teacher Ana" style={{ width: "50px", height: "50px" }} />
                </div>
                <div className="icons">
                    <div
                        className={`hamburger ${isMenuOpen ? "open" : "close"}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        role="button"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-controls="menu-items"
                        aria-label="Abrir/Fechar menu"
                    >
                        <div className={`line ${isMenuOpen ? "open" : ""}`} style={{ backgroundColor: navigation.textColor }}></div>
                        <div className={`line ${isMenuOpen ? "open" : ""}`} style={{ backgroundColor: navigation.textColor }}></div>
                        <div className={`line ${isMenuOpen ? "open" : ""}`} style={{ backgroundColor: navigation.textColor }}></div>
                    </div>
                    <div className={`itens ${isMenuOpen ? "open" : ""}`} id="menu-items">
                        <ul>
                            {navigation.navigation.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        title={`Ir para ${item.name}`}
                                        style={{ color: navigation.textColor }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}