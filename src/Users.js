import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function UsersTable() {

  const [rows, setRows] = React.useState([
    {
      id: 1,
      firstName: 'Justin',
      lastName: 'Langer',
      phoneNumber: '99884455',
      address: 'Pune',
      email: 'Justin@gmail.com',
    },
    {
      id: 2,
      firstName: 'Matthew',
      lastName: 'Perry',
      phoneNumber: '9982421',
      address: 'Chicago',
      email: 'Matt@gmail.com',
    },
    {
      id: 3,
      firstName: 'Pham',
      lastName: 'Chinh',
      phoneNumber: '773645',
      address: 'Ohio',
      email: 'Chinh@gmail.com',
    },
    {
      id: 4,
      firstName: 'Cheng',
      lastName: 'Xiong',
      phoneNumber: '66742798',
      address: 'Toronto',
      email: 'Cheng@gmail.com',
    },
    {
      id: 5,
      firstName: 'Jeremy',
      lastName: 'Honheistrieter',
      phoneNumber: '784657',
      address: 'Boulder',
      email: 'Jeremy@gmail.com',
    }
  ]);

  const handleEdit = () => {
    console.log("Edit button clicked");
  }
  const handleDelete = (id) => {
    const updatedRows = rows.filter((item)=> item.id !== id)
    setRows(updatedRows)
  }
  return (
    <TableContainer component={Paper} style={{marginTop: '50px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.firstName}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center"><EditIcon onClick={() => handleEdit(row.id)}/></TableCell>

              <TableCell align="center"><DeleteIcon onClick={() => handleDelete(row.id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>    
      </Table>
    </TableContainer>
  );
}
