import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const [time, setTime] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    grade: "",
    gender: "",
    time: "",
    server: ""
  });

  const [loading, setLoading] = useState(false);

  const arabicRegex = /^[\u0600-\u06FF\s]+$/;

  const validate = () => {

    const newErrors = {
      firstName: "",
      lastName: "",
      phone: "",
      grade: "",
      gender: "",
      time: "",
      server: ""
    };

    let valid = true;

    if (!firstName.trim()) {
      newErrors.firstName = "برجاء إدخال الاسم الأول";
      valid = false;
    } else if (!arabicRegex.test(firstName)) {
      newErrors.firstName = "الاسم الأول يجب أن يكون باللغة العربية";
      valid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = "برجاء إدخال الاسم الثاني";
      valid = false;
    } else if (!arabicRegex.test(lastName)) {
      newErrors.lastName = "الاسم الثاني يجب أن يكون باللغة العربية";
      valid = false;
    }

    if (!phone) {
      newErrors.phone = "برجاء إدخال رقم الهاتف";
      valid = false;
    } else if (phone.length < 11) {
      newErrors.phone = "رقم الهاتف أقل من 11 رقم";
      valid = false;
    } else if (phone.length > 11) {
      newErrors.phone = "رقم الهاتف أكبر من 11 رقم";
      valid = false;
    }

    if (!grade) {
      newErrors.grade = "اختر الصف الدراسي";
      valid = false;
    }

    if (!gender) {
      newErrors.gender = "اختر النوع";
      valid = false;
    }

    if (!time) {
      newErrors.time = "اختر موعد الحصة";
      valid = false;
    }

    setErrors(newErrors);

    return valid;

  };

  const handleRegister = async () => {

    if (!validate()) return;

    try {

      setLoading(true);

     const response = await fetch(
  "http://localhost:5000/api/students/register",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName,
      lastName,
      phone,
      grade,
      gender,
      time
    })
  }
);
       
      const data = await response.json();

      if (!response.ok) {

        setErrors((prev) => ({
          ...prev,
          server: data.message || "حدث خطأ أثناء التسجيل"
        }));

        setLoading(false);

        return;

      }

      localStorage.setItem(
        "student",
        JSON.stringify(data.student)
      );

      alert("تم التسجيل بنجاح ✅");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      setErrors((prev) => ({
        ...prev,
        server:
          "تعذر الاتصال بالسيرفر، حاول مرة أخرى."
      }));

    } finally {

      setLoading(false);

    }

  };

  return (
        <section className="register">

      <div className="register-box">

        <h1>تسجيل الطلاب</h1>

        <p>احجز مكانك الآن مع الأستاذ كريم حسن</p>

        {
          errors.server &&
          <div className="error-box">
            ❌ {errors.server}
          </div>
        }

        <div className="input-box no-arrow">

          <input
            type="text"
            value={firstName}
            onChange={(e) => {

              setFirstName(e.target.value);

              setErrors({
                ...errors,
                firstName: ""
              });

            }}
          />

          <label>الاسم الأول</label>

          {
            errors.firstName &&
            <small className="field-error">
              {errors.firstName}
            </small>
          }

        </div>

        <div className="input-box no-arrow">

          <input
            type="text"
            value={lastName}
            onChange={(e) => {

              setLastName(e.target.value);

              setErrors({
                ...errors,
                lastName: ""
              });

            }}
          />

          <label>الاسم الثاني</label>

          {
            errors.lastName &&
            <small className="field-error">
              {errors.lastName}
            </small>
          }

        </div>

        <div className="input-box no-arrow">

          <input
            type="text"
            maxLength={11}
            value={phone}
            onChange={(e) => {

              const value =
              e.target.value.replace(/\D/g,"");

              setPhone(value);

              setErrors({
                ...errors,
                phone: ""
              });

            }}
          />

          <label>رقم الهاتف</label>

          {
            errors.phone &&
            <small className="field-error">
              {errors.phone}
            </small>
          }

        </div>

        <div className="input-box">

          <select

            value={grade}

            onChange={(e)=>{

              setGrade(e.target.value);

              setTime("");

              setErrors({
                ...errors,
                grade:"",
                time:""
              });

            }}

          >

            <option value=""></option>

            <option>First Prep</option>

            <option>Second Prep</option>

            <option>Third Prep</option>

          </select>

          <label>الصف الدراسي</label>

          {
            errors.grade &&
            <small className="field-error">
              {errors.grade}
            </small>
          }

        </div>

        <div className="input-box">

          <select

            value={gender}

            onChange={(e)=>{

              setGender(e.target.value);

              setErrors({
                ...errors,
                gender:""
              });

            }}

          >

            <option value=""></option>

            <option>Male</option>

            <option>Female</option>

          </select>

          <label>النوع</label>

          {
            errors.gender &&
            <small className="field-error">
              {errors.gender}
            </small>
          }

        </div>

        <div className="input-box">

          <select

            value={time}

            onChange={(e)=>{

              setTime(e.target.value);

              setErrors({
                ...errors,
                time:""
              });

            }}

          >

            <option value=""></option>

            {
              grade==="First Prep" &&
              <>
                <option>2 PM</option>
                <option>4 PM</option>
                <option>6 PM</option>
                <option>8 PM</option>
              </>
            }

            {
              grade==="Second Prep" &&
              <>
                <option>2 PM</option>
                <option>4 PM</option>
                <option>6 PM</option>
              </>
            }

            {
              grade==="Third Prep" &&
              <>
                <option>12 PM</option>
                <option>2 PM</option>
                <option>4 PM</option>
                <option>6 PM</option>
              </>
            }

          </select>

          <label>موعد الحصة</label>

          {
            errors.time &&
            <small className="field-error">
              {errors.time}
            </small>
          }

        </div>

        <button

          onClick={handleRegister}

          disabled={loading}

        >

          {

            loading

            ? "جاري التسجيل..."

            : "تسجيل الآن"

          }

        </button>

      </div>

    </section>

  );

}