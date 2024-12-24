import "./Button.css"

interface ButtonData {
    background: string;
    title: string;
    link: string;
    target: string;
    textColor: string;
}

interface ButtonProps {
    button: ButtonData;
}

export function Button({ button }: ButtonProps) {
    return (
        <div className="button">
            <div className="button-container">
                <a href={button.link} target={button.target} style={{ color: button.textColor, backgroundColor: button.background }}>
                    {button.title}
                </a>
            </div>
        </div>
    )
}