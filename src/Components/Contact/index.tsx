import data from "../../../data.json";
import { ContactForm } from "../ContactForm";
import "./Contact.css";

export function Contact() {
    const contact = data.Contact;

    return (
        <section className="contact" style={{ color: contact.textColor }}>
            <div className="contact-container">
                <h2>{contact.title}</h2>
                <div className="contacts">
                    {contact.contacts.map((item, index) => (
                        <div className="item" key={index}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.link || "#"}
                                style={{ color: contact.textColor }}
                            >
                                <img src={item.icon} alt={item.type || "Contato"} />
                                {item.content}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="form">
                    <ContactForm button={contact.button}/>
                </div>
            </div>
        </section>
    );
}
