import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { meleeWeaponData } from '../../../data/meleeWeaponData';


export default function MeleeWeaponTable() {


  return (
    <TableContainer component={Paper} className='main-box'>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>נשק</TableCell>
            <TableCell align='center'>נזק</TableCell>
            <TableCell align='center'>משקל (ק"ג)</TableCell>
            <TableCell align='center'>מחיר</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {meleeWeaponData.map((weapon) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={weapon.נשק}
            >
              <TableCell component="th" scope="row" align='right'>
                {weapon.נשק}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {weapon.נזק}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {weapon['משקל (ק"ג)']}
              </TableCell>
              <TableCell component="th" scope="row" align='right'>
                {weapon.מחיר}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
