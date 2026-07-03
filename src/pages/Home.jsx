import "../styles/home.css";
import Web from "../assets/Web.png";

export default function Home() {
  return (
    <div className="home">

      <div className="hero-container">

        <section className="hero">

          <div className="hero-left">

            <span className="tag">
              # أفضل مدرس رياضيات
            </span>

            <h1>
              الأستاذ كريم حسن
            </h1>

            <p>
              شرح مبسط • متابعة مستمرة • امتحانات دورية •
              أفضل تجربة تعليمية للمرحلة الإعدادية
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

            <img
              src={Web}
              alt="Math"
              className="hero-image"
            />

          </div>

        </section>

        <section className="stats">

          <div className="stat-card">
            <h2>500+</h2>
            <p>طالب</p>
          </div>

          <div className="stat-card">
            <h2>98%</h2>
            <p>نسبة النجاح</p>
          </div>

          <div className="stat-card">
            <h2>3</h2>
            <p>صفوف دراسية</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>متابعة</p>
          </div>

        </section>

      </div>

    </div>
  );
}