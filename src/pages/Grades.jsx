import "../styles/grades.css";

export default function Grades() {
  return (
    <section className="grades">

      <div className="grades-title">

        <span>المراحل الدراسية</span>

        <h1>
          اختر صفك الدراسي
        </h1>

      </div>

      <div className="timeline">

        <div className="timeline-box">

          <div className="circle"></div>

          <div className="content">

            <h2>أولى إعدادي</h2>

            <p>
              تأسيس قوي في الرياضيات
              وشرح مبسط لكل الدروس.
            </p>

          </div>

        </div>

        <div className="timeline-box">

          <div className="circle"></div>

          <div className="content">

            <h2>تانية إعدادي</h2>

            <p>
              حل تدريبات وامتحانات
              ومتابعة مستمرة للطلاب.
            </p>

          </div>

        </div>

        <div className="timeline-box">

          <div className="circle"></div>

          <div className="content">

            <h2>تالتة إعدادي</h2>

            <p>
              مراجعات شاملة واستعداد كامل
              لامتحانات الشهادة الإعدادية.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}