import data from "../../../data.json";

export function SideBar() {
    const sideBar = data.Menu;

    return (
        <section className="sidebar" style={{ backgroundColor: sideBar.background, textAlign:"center" }}>
            <div className="siderbar-container">
                <a
                    href="https://dellepranestudio.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/images/logos/logo-full-white-delleprane-studio.webp"
                        alt="DellePrane Studio" 
                        aria-label="DellePrane Studio logo" 
                        loading="lazy"
                        style={{ width: "100px", height: "100px", padding:"10px 0" }}
                    />
                </a>
            </div>
        </section>
    )
}