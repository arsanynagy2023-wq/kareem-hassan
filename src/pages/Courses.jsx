import "../styles/courses.css";

export default function Courses() {
  return (
    <section className="courses">

      <h1>
        الكورسات
      </h1>

      <div className="courses-container">

        <div className="course-card">
          <h2>أولى إعدادي</h2>

          <p>
            شرح كامل المنهج + امتحانات + واجبات
          </p>

          <a href="/contact">
            <button>
              اشترك الآن
            </button>
          </a>
        </div>

        <div className="course-card">
          <h2>تانية إعدادي</h2>

          <p>
            تأسيس قوي وتدريب على الامتحانات
          </p>

          <a href="/contact">
            <button>
              اشترك الآن
            </button>
          </a>
        </div>

        <div className="course-card">
          <h2>تالتة إعدادي</h2>

          <p>
            مراجعات ونهائي وامتحانات شاملة
          </p>

          <a href="/contact">
            <button>
              اشترك الآن
            </button>
          </a>
        </div>

      </div>

    </section>
  );
}