import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface ButtonData {
    background: string;
    title: string;
    textColor: string;
}

interface ButtonProps {
    button: ButtonData;
}

interface FormState {
    name: string;
    email: string;
    message: string;
}

const initialState: FormState = {
    name: "",
    email: "",
    message: "",
};

export function ContactForm({ button }: ButtonProps) {
    const [formData, setFormData] = useState<FormState>(initialState);
    const [isSending, setIsSending] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            // Substitua pelos seus IDs do EmailJS
            const serviceID = "service_7k1rnhq";
            const templateID = "template_51v904f"; // Corrigido o nome da variável
            const userID = "y_no-8_crGLTCRoOu";

            const formDataToSend = {
                from_name: formData.name, // 'from_name' deve corresponder ao template
                from_email: formData.email, // 'from_email' deve corresponder ao template
                message: formData.message, // 'message' deve corresponder ao template
            };

            await emailjs.send(serviceID, templateID, formDataToSend, userID);

            setResponseMessage("E-mail enviado com sucesso!");
            setFormData(initialState); // Limpa o formulário
        } catch (error) {
            console.error("Erro ao enviar o e-mail:", error);
            setResponseMessage("Houve um erro ao enviar o e-mail. Tente novamente.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="email-form-container">
            <form onSubmit={handleSubmit} className="email-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    aria-label="Nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    aria-label="Endereço de e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Mensagem"
                    aria-label="Mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    aria-label="Enviar mensagem"
                    style={{
                        cursor: "pointer",
                        backgroundColor: button.background,
                        color: button.textColor,
                    }}
                    disabled={isSending}
                >
                    {button.title} {/* Alterado para exibir o título do botão */}
                </button>
            </form>
            {responseMessage && <p style={{ color: "white" }}>{responseMessage}</p>}
        </div>
    );
}
