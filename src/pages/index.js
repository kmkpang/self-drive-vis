import DashboardLayout from 'common/layouts/dashboard';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
              <TableCell width={'20%'}>Sl.No.</TableCell>
              <TableCell width={'60%'}>Functional Name</TableCell>
              <TableCell width={'20%'}>Overlap Volume %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
