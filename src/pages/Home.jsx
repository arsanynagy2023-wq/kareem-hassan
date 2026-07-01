import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            #1 Math Teacher
          </span>

          <h1>
            الأستاذ <br />
            كريم حسن
          </h1>

          <p>
            مدرس الرياضيات للمرحلة الإعدادية
            <br />
            شرح مبسط + متابعة مستمرة + حل امتحانات
          </p>

          <div className="hero-buttons">

            <a href="/register">
              <button className="start-btn">
                سجل الآن
              </button>
            </a>

            <a href="/courses">
              <button className="courses-btn">
                الكورسات
              </button>
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="glass-card">

            <h2>+500</h2>
            <p>طالب متفوق</p>

          </div>

          <div className="glass-card">

            <h2>100%</h2>
            <p>متابعة واهتمام</p>

          </div>

        </div>

      </section>

      <a
        href="tel:01009337554"
        className="call-bubble"
      >
        😊 Call Us
      </a>

    </div>
  );
}