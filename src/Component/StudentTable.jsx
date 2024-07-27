import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

// import { db } from "../firebase";

export default function StudentTable({ student, setStudent }) {
  // updatedStudent
  const handleUpdateStudent = (studntId) => {
    alert(studntId);
  };
  // DeleteStudent
  const handleDeleteStudent = async (studntId) => {
    const studentDoc = doc(db, "students", studntId);
    await deleteDoc(studentDoc);
    setStudent(student.filter((studnt) => studnt.id !== studntId));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Student Roll #</TableCell>
            <TableCell align="center">Student Name</TableCell>
            <TableCell align="center">Student Age</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((studnt) => (
            <TableRow
              key={studnt.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{studnt.rollNo}</TableCell>
              <TableCell align="center">{studnt.name}</TableCell>
              <TableCell align="center">{studnt.age}</TableCell>
              <TableCell align="center">
                <EditIcon
                  style={{
                    cursor: "pointer",
                    color: "#007bff",
                    marginRight: "10",
                  }}
                  onClick={() => handleUpdateStudent(studnt.id)}
                />
                <DeleteIcon
                  style={{ cursor: "pointer", color: "crimson" }}
                  onClick={() => handleDeleteStudent(studnt.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}