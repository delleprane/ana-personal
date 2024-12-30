import data from "../../../data.json"
import { Button } from "../Button";

import "./Preview.css"

export function Preview() {
    const preview = data.Preview;

    return (
        <section className="preview" style={{ color: preview.textColor }} id="aula">
            <div className="preview-container">
                <h2>{preview.title}</h2>
                <div className="class">
                    <video src={preview.video} controls></video>
                </div>
                <div className="button-preview">
                    <Button button={preview.button} />
                </div>
            </div>
        </section>
    )
}