import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div className="student-list">
      {students.map((s, index) => (
        <StudentCard key={index} student={s} />
      ))}
    </div>
  );
}
export default StudentList;
