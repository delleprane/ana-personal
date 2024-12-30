import data from "../../../data.json";
import { ContactForm } from "../ContactForm";
import "./Contact.css";

export function Contact() {
  const contact = data.Contact;

  return (
    <section
      className="contact"
      style={{ color: contact.textColor }}
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="contact-container">
        <h2 id="contact-title">{contact.title}</h2>
        <div className="contacts">
          {contact.contacts.map((item, index) => (
            <div className="item" key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link || "#"}
                style={{ color: contact.textColor }}
                aria-label={`Contato via ${item.type || "link"}`} // Descrição adicional para leitores de tela
              >
                <img
                  src={item.icon}
                  alt={item.type || "Ícone de contato"}
                />
                <span>{item.content}</span> {/* Garantir que o texto é parte do link */}
              </a>
            </div>
          ))}
        </div>
        <div className="form">
          <ContactForm button={contact.button} />
        </div>
      </div>
    </section>
  );
}
