import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AncorDownloadLink } from '../button/ancorDowload';

function createData(
  place: string,
  link: string
) {
  return { place, link };
}

const rows = [
  createData('Buenos aires', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-BUENOS-ARIES.pdf'),
  createData('C.A.B.A', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-CAPITAL-FEDERAL.pdf'),
  createData('CATAMARCA', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-CATAMARCA.pdf'),
  createData('CHACO', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-CHACO.pdf'),
  createData('CHUBUT', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-CHUBUT.pdf'),
  createData('CORDOBA', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-CORDOBA.pdf'),
  createData('CORRIENTES', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-CORRIENTES.pdf'),
  createData('ENTRE RÍOS', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-ENTRE-RIOS.pdf'),
  createData('FORMOSA', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-FORMOSA.pdf'),
  createData('JUJUY', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-JUJUY.pdf'),
  createData('LA PAMPA', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-LA-PAMPA.pdf'),
  createData('LA RIOJA', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-LA-RIOJA.pdf'),
  createData('MISIONES', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-MISIONES.pdf'),
  createData('NEUQUEN', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-NEUQUEN.pdf'),
  createData('RIO NEGRO', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-RIO-NEGRO.pdf'),
  createData('SALTA', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-SALTA.pdf'),
  createData('SAN JUAN', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-SAN-JUAN.pdf'),
  createData('SAN LUIS', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-SAN-LUIS.pdf'),
  createData('SANTA CRUZ', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-SANTA-CRUZ.pdf'),
  createData('SANTA FE', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-SANTA-FE.pdf'),
  createData('SANTIAGO DEL ESTEREO', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-SANTIAGO-DEL-ESTEREO.pdf'),
  createData('TIERRA DEL FUEGO', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-TIERRA-DEL-FUEGO.pdf'),
  createData('TUCUMÁN', 'https://lombardimn.github.io/lla-fiscales/assets/docs/certificados-escrutinio/CE-TUCUMAN.pdf'),
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
              <TableCell><AncorDownloadLink URL={row.link} FILENAME={`CE-${row.place}.pdf`}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}