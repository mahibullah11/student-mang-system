import { collection, getDocs } from 'firebase/firestore';
import './App.css'
import StudentList from './Component/StudentList'
import StudentName from './Component/StudentName'
import { useEffect, useState } from 'react';
import { db } from '../firebase';




function App() {
  const [student, setStudent] = useState([]);

  const getStudents = async () => {
    const studentCollection = collection(db, "students");
    const studentSnapshot = await getDocs(studentCollection);
    const studentList = studentSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudent(studentList);
  };
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className='app-container'>
      <h1 className='heading-title'>Student Managment System</h1>
      <StudentName getStudents={getStudents}/>
      <StudentList student={student} setStudent={setStudent}/>
    </div>
  )
}

export default App