import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  place: string,
  link: string
) {
  return { place, link };
}

const rows = [
  createData('Buenos aires', 'lorem'),
  createData('C.A.B.A', 'lorem'),
  createData('CATAMARCA', 'lorem'),
  createData('CHACO', 'lorem'),
  createData('CHUBUT', 'lorem'),
  createData('CORDOBA', 'lorem'),
  createData('CORRIENTES', 'lorem'),
  createData('ENTRE RÍOS', 'lorem'),
  createData('FORMOSA', 'lorem'),
  createData('JUJUY', 'lorem'),
  createData('LA PAMPA', 'lorem'),
  createData('LA RIOJA', 'lorem'),
  createData('MISIONES', 'lorem'),
  createData('NEUQUEN', 'lorem'),
  createData('RIO NEGRO', 'lorem'),
  createData('SALTA', 'lorem'),
  createData('SAN JUAN', 'lorem'),
  createData('SAN LUIS', 'lorem'),
  createData('SANTA CRUZ', 'lorem'),
  createData('SANTA FE', 'lorem'),
  createData('SANTIAGO DEL ESTEREO', 'lorem'),
  createData('TIERRA DEL FUEGO', 'lorem'),

];

export default function CertEscrutinio() {
  return (
    <TableContainer component={Paper} className='rounded-lg'>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead className='bg-[#F9FAFB]'>
          <TableRow>
            <TableCell>
                <span className='font-bold text-[#6B7280]'>LUGARES</span>
            </TableCell>
            <TableCell>
                <span className='font-bold text-[#6B7280]'></span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.place}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.place}</TableCell>
              <TableCell><a className='text-blue-700' href={row.link}>enlace</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}