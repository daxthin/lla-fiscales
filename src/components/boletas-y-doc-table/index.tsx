import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  type: string,
  name: string,
  link: string,
) {
  return { type, name, link};
}

const rows = [
  createData('Boletas oficiales', 'Optimización', 'lorem'),
  createData('Exp 7574/2023 fecha 31/Oct/2023', 'Acta de la Junta Electoral Nacional para usar boletas con fecha 22/Oct/2023', 'lorem'),
  createData('Planilla', 'Control de Cantidad de Votante', 'lorem'),
];

export default function BoletasYdocTable() {
  return (
    <TableContainer component={Paper} className='rounded-lg'>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-[#F9FAFB]'>
            <TableCell>
                <span className='font-bold text-[#6B7280]'>BOLETAS / DOCUMENTOS</span>
            </TableCell>
            <TableCell>
                <span className='font-bold text-[#6B7280]'>NOMBRE</span>
            </TableCell>
            <TableCell>
                <span className='font-bold text-[#6B7280]'></span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.type}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell><a className='text-blue-700' href={row.link}>enlace</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}