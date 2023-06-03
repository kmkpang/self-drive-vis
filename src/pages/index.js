import DashboardLayout from 'common/layouts/dashboard';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import {
  Snackbar,
  Paper,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { getTestScenario, deleteData } from 'services/supabase.service';
import React, { useState } from 'react';
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function RenderTable() {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectID, setSelectID] = useState(null);
  const handleOpen = (id) => {
    setSelectID(id), setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ['getTestScenario'],
    queryFn: getTestScenario,
  });

  const handleDeleteData = async () => {
    const data = await deleteData(selectID);
    console.log('data', data);
    if (data?.success) {
      setOpenModal(false);
      setOpen(true);
    }
  };

  const autoCloseAlert = (message) => {
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    return (
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </MuiAlert>
      </Snackbar>
    );
  };

  return (
    <Paper sx={{ p: 3 }}>
      {autoCloseAlert('Successfully deleted.')}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={'20%'}>Sl.No.</StyledTableCell>
              <StyledTableCell width={'60%'}>Functional Name</StyledTableCell>
              <StyledTableCell width={'18%'}>Overlap Volume %</StyledTableCell>
              <StyledTableCell width={'2%'}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <StyledTableRow key={row?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() =>
                    router.push({
                      pathname: '/testScenario/[pid]',
                      query: { pid: row?.id },
                    })
                  }
                >
                  {row?.id}
                </TableCell>
                <TableCell
                  onClick={() =>
                    router.push({
                      pathname: '/testScenario/[pid]',
                      query: { pid: row?.id },
                    })
                  }
                >
                  {row.function_name}
                </TableCell>
                <TableCell
                  onClick={() =>
                    router.push({
                      pathname: '/testScenario/[pid]',
                      query: { pid: row?.id },
                    })
                  }
                >{`${row.overlap_volume}%`}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={() => handleOpen(row?.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openModal}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <Typography variant="h6">Are you sure you want to delete?</Typography>
          <Typography variant="subtitle2">You can't undo this operation</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseModal}>
            No
          </Button>
          <Button variant="contained" color="error" onClick={handleDeleteData}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
