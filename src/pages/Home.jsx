import "../styles/home.css";
import Web from "../assets/web.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}

      <section className="hero">

        <div className="hero-left">

          <span className="hero-tag">
            # أفضل مدرس رياضيات للمرحلة الإعدادية
          </span>

          <h1>
            الأستاذ
            <br />
            كريم حسن
          </h1>

          <p>
            شرح مبسط بطريقة سهلة • امتحانات أسبوعية • متابعة مستمرة •
            منصة تعليمية متكاملة تساعدك تحقق أعلى الدرجات.
          </p>

          <div className="hero-buttons">

            <Link to="/register">
              <button className="main-btn">
                سجل الآن
              </button>
            </Link>

            <Link to="/courses">
              <button className="second-btn">
                الكورسات
              </button>
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <div className="image-circle">

            <img
              src={web}
              alt="Math Teacher"
              className="hero-image"
            />

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="stats">

        <div className="stat-card">
          <h2>5000+</h2>
          <span>طالب</span>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <span>نسبة النجاح</span>
        </div>

        <div className="stat-card">
          <h2>12+</h2>
          <span>سنوات خبرة</span>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <span>متابعة</span>
        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>
          لماذا تختار الأستاذ كريم حسن؟
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>📚</h3>
            <h4>شرح بسيط</h4>
            <p>
              شرح جميع الدروس بطريقة سهلة تناسب جميع المستويات.
            </p>
          </div>

          <div className="feature-card">
            <h3>📝</h3>
            <h4>امتحانات دورية</h4>
            <p>
              اختبارات أسبوعية وشهرية لقياس مستواك أول بأول.
            </p>
          </div>

          <div className="feature-card">
            <h3>📈</h3>
            <h4>متابعة مستمرة</h4>
            <p>
              متابعة مع الطلاب وأولياء الأمور لضمان أفضل النتائج.
            </p>
          </div>

          <div className="feature-card">
            <h3>🏆</h3>
            <h4>نتائج مميزة</h4>
            <p>
              آلاف الطلاب حققوا أعلى الدرجات خلال السنوات الماضية.
            </p>
          </div>

        </div>

      </section>

      {/* Grades */}

      <section className="grades">

        <h2>
          الصفوف الدراسية
        </h2>

        <div className="grades-grid">

          <div className="grade-card">

            <h3>أولى إعدادي</h3>

            <p>
              تأسيس قوي في الرياضيات.
            </p>

            <Link to="/register">
              <button>
                سجل الآن
              </button>
            </Link>

          </div>

          <div className="grade-card">

            <h3>ثانية إعدادي</h3>

            <p>
              مراجعات واختبارات مستمرة.
            </p>

            <Link to="/register">
              <button>
                سجل الآن
              </button>
            </Link>

          </div>

          <div className="grade-card">

            <h3>ثالثة إعدادي</h3>

            <p>
              استعداد كامل لامتحان الشهادة.
            </p>

            <Link to="/register">
              <button>
                سجل الآن
              </button>
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          ابدأ رحلتك التعليمية الآن
        </h2>

        <p>
          احجز مكانك مع الأستاذ كريم حسن واستعد لتحقيق أعلى الدرجات.
        </p>

        <Link to="/register">
          <button className="cta-btn">
            تسجيل الآن
          </button>
        </Link>

      </section>

    </main>
  );
}