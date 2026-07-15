import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");   // <-- NEW state for search

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // Filter students based on search input
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      
      {/* Search bar */}
      <input 
        type="text" 
        placeholder="Search students..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />

      {/* Form to add students */}
      <StudentForm addStudent={addStudent} />

      {/* Display filtered students */}
      <StudentList students={filteredStudents} />

      <Footer />
    </div>
  );
}

export default App;


