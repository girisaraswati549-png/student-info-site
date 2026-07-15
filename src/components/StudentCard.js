function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
    </div>
  );
}
export default StudentCard;
