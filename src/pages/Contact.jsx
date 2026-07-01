import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <p>
          For reservations and inquiries, contact Mr. Kareem Hassan
        </p>

        <div className="contact-cards">

          <a href="tel:01009337554" className="contact-card">
            <span>📞</span>
            <h3>Call</h3>
            <p>01009337554</p>
          </a>

          <a
            href="https://wa.me/201554909339"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>💬</span>
            <h3>WhatsApp</h3>
            <p>01554909339</p>
          </a>

          <a
            href="https://www.facebook.com/share/17hjQxEzPG/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>📘</span>
            <h3>Facebook</h3>
            <p>Visit Page</p>
          </a>

          <a
            href="https://www.instagram.com/m.kareem_hassan?igsh=cHQ3aDF2cXEzMHB2"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>📸</span>
            <h3>Instagram</h3>
            <p>@m.kareem_hassan</p>
          </a>

          <a
            href="https://www.tiktok.com/@166kareemhassan?_r=1&_t=ZS-96kqimmDPwD"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>🎵</span>
            <h3>TikTok</h3>
            <p>@166kareemhassan</p>
          </a>

        </div>

      </div>

    </section>
  );
}