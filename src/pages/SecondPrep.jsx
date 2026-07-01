import { useState } from "react";

import "../styles/gradePage.css";

export default function SecondPrep() {

  const allStudents =
    JSON.parse(localStorage.getItem("students")) || [];

  const secondStudents =
    allStudents.filter(
      (student)=>
      student.grade==="Second Prep"
    );

  const [search,setSearch] = useState("");

  const filteredStudents =
    secondStudents.filter(

      (student)=>

      (
        student.firstName +
        " " +
        student.lastName
      )

      .toLowerCase()

      .includes(

        search.toLowerCase()

      )

      ||

      student.phone.includes(search)

    );

  return(

    <section className="grade-page">

      <h1>
        Second Prep
      </h1>

      <p className="students-count">
        Students : {filteredStudents.length}
      </p>

      <input

        className="search-box"

        placeholder="Search by name or phone"

        value={search}

        onChange={(e)=>

          setSearch(e.target.value)

        }

      />

      <table className="students-table">

        <thead>

          <tr>

            <th>Name</th>

            <th>Phone</th>

            <th>Gender</th>

            <th>Time</th>

          </tr>

        </thead>

        <tbody>

          {

            filteredStudents.map(

              (student,index)=>(

                <tr key={index}>

                  <td>

                    {student.firstName}
                    {" "}
                    {student.lastName}

                  </td>

                  <td>

                    {student.phone}

                  </td>

                  <td>

                    {student.gender}

                  </td>

                  <td>

                    {student.time}

                  </td>

                </tr>

              )

            )

          }

        </tbody>

      </table>

    </section>

  );

}