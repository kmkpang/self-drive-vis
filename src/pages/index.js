import DashboardLayout from 'common/layouts/dashboard';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@mui/material/styles';
import { Paper, Typography, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { getTestScenario } from 'services/supabase.service';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Typography variant="h4" pb={4}>
        View Generated Test Scenarios
      </Typography>
      <RenderTable />
    </>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#B3B3B3',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#D9D9D9',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#D9D9D9',
  },
  '&:hover': {
    backgroundColor: `#F5F5F5 !important`,
  },
}));

function RenderTable() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ['getTestScenario'],
    queryFn: getTestScenario,
  });

  return (
    <Paper sx={{ p: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={'20%'}>Sl.No.</StyledTableCell>
              <StyledTableCell width={'60%'}>Functional Name</StyledTableCell>
              <StyledTableCell width={'20%'}>Overlap Volume %</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <StyledTableRow
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() =>
                  router.push({
                    pathname: '/testScenario/[pid]',
                    query: { pid: row?.id },
                  })
                }
              >
                <TableCell component="th" scope="row">
                  {row?.id}
                </TableCell>
                <TableCell>{row.function_name}</TableCell>
                <TableCell>{`${row.overlap_volume}%`}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
