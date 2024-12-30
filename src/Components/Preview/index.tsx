import data from "../../../data.json";
import { Button } from "../Button";

import "./Preview.css";

export function Preview() {
    const preview = data.Preview;

    return (
        <section
            className="preview"
            style={{ color: preview.textColor }}
            id="aula"
            aria-labelledby="preview-title"
        >
            <div className="preview-container">
                <h2 id="preview-title">{preview.title}</h2>
                <div className="class">
                    <video
                        src={preview.video}
                        controls
                        aria-label="Vídeo de prévia da aula"
                    >
                        Seu navegador não suporta o elemento <code>video</code>.
                    </video>
                </div>
                <div className="button-preview">
                    <Button button={preview.button} />
                </div>
            </div>
        </section>
    );
}
