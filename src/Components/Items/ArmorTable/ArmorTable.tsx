import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { armorData } from '../../../data/armorData';


export default function ArmorTable() {


  return (
    <TableContainer component={Paper} className='main-box'>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>סוג השריון</TableCell>
            <TableCell align='center'>השפעה על דרג"ש</TableCell>
            <TableCell align='center'>משקל (ק"ג)</TableCell>
            <TableCell align='center'>מחיר</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {armorData.map((armor) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={armor['סוג השריון']}
            >
              <TableCell component="th" scope="row" align='right'>
                {armor['סוג השריון']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {armor.השפעה}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {armor.משקל}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {armor.מחיר}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
