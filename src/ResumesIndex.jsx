/* eslint-disable react/prop-types */
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
