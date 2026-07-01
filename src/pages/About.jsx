import "../styles/about.css";

export default function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-text">

          <span>من نحن</span>

          <h1>
            الأستاذ كريم حسن
          </h1>

          <p>
            مدرس الرياضيات للمرحلة الإعدادية بمدرسة السيدة خديجة.
            يتميز بشرح مبسط وسهل يساعد الطلاب على فهم المادة
            وتحقيق أعلى الدرجات.
          </p>

          <p>
            خبرة في تأسيس الطلبة وحل الامتحانات والمتابعة المستمرة
            مع أولياء الأمور.
          </p>

        </div>

        <div className="about-box">

          <div className="info-card">
            <h2>+5</h2>
            <p>سنوات خبرة</p>
          </div>

          <div className="info-card">
            <h2>+500</h2>
            <p>طالب ناجح</p>
          </div>

        </div>

      </div>

    </section>
  );
}