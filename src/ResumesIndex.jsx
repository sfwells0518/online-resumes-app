export function ResumesIndex(props) {
  console.log(props.student);
  return (
    <div id="students-index">
      {props.students.map((student) => (
        <div key={student.first_name}>
          <p>{student.last_name}</p>
          <p>{student.email}</p>
          <hr />
          <button
            onClick={() => {
              props.onShowResume(student);
            }}
          >
            more info
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
{
  /* <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{"test"}</h5>
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
