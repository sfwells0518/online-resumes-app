/* eslint-disable react/prop-types */
import { ResumesShow } from "./ResumesShow";

export function ResumesIndex(props) {
  console.log(props.student);
  return (
    <div id="students-index">
      <center>
        <h1>All Resumes</h1>
      </center>
      <div className="row">
        {props.students.map((student) => (
          <div key={student.id} className="col-sm-4 mb-3">
            <div className="card flex-card">
              <div className="card-body d-flex flex-column">
                <center>
                  <h5 className="card-title">
                    {student.first_name} {student.last_name}
                  </h5>
                </center>

                <div className="card-bio">
                  {student.short_bio}
                </div>
                <div key={student.id}>
                  <button
                    className="red-resume-button"
                    href="/www.google.com"
                    onClick={() => {
                      props.onShowStudent(student);
                    }}
                  >
                    See Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // export function ResumesIndex(props) {
  //   console.log(props.student);
  //   return (
  //     div id="students-index">
  //     {props.students
  //       .map(student) => (
  //         <div key={student.id} className="col-sm-4 mb-3">
  //           <div className="card h-100">
  //             <div className="card-body card-body-custom d-flex flex-column">
  //               <h4 className="card-title">{student.first_name} {student.last_name}</h4>
  //               <h6>${student.short_bio}</h6>
  //               <br></br>
  //               <div className="mt-auto text-center">
  //                 <button
  //                   className="red-button"
  //                   onClick={() => {
  //                     props.onShowStudent(student);
  //                   }}
  //                 >
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  // <div id="students-index">
  //   {props.students.map((student) => (
  //     <div key={student.first_name}>
  //       <p>{student.last_name}</p>
  //       <p>{student.email}</p>
  //       <hr />
  //       <button
  //         onClick={() => {
  //           props.onShowResume(student);
  //         }}
  //       >
  //         more info
  //       </button>
  //       <hr />
  //     </div>
  //   ))}
  // </div>
  // );
}
{
  /* <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{}</h5>
              <p className="card-text">words</p>
              <a href="resume?.id" className="btn btn-primary">
                See full resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name of candidate</h5>
              <p className="card-text">short bio - make dynamic</p>
              <a href="#" className="btn btn-primary">
                See full resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <br /> */
}

//       <div>
//         {props.students.map((student) => (
//           <div key={student.id}>
//             <p>First Name: {student.first_name}</p>
//             <p>Last Name: {student.last_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
