import data from "../../../data.json";

export function SideBar() {
    const sideBar = data.Menu;

    return (
        <section
            className="sidebar"
            style={{ backgroundColor: sideBar.background, textAlign: "center" }}
            aria-label="Sidebar Menu"
        >
            <div className="sidebar-container">
                <a
                    href="https://dellepranestudio.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visite o site DellePrane Studio" // Melhorando a descrição
                >
                    <img
                        src="/images/logos/logo-full-white-delleprane-studio.webp"
                        alt="Logo do DellePrane Studio" // Melhorando a descrição da imagem
                        loading="lazy" // Melhorando a performance ao carregar a imagem
                        style={{ width: "100px", height: "100px", padding: "10px 0" }}
                    />
                </a>
            </div>
        </section>
    );
}
