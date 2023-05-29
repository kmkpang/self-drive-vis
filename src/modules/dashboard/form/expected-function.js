import { Stack, Typography } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

export default function ExpectedFunctionForm() {
  return (
    <>
      <Typography variant="h5" pb={2}>
        Expected Functional Output
      </Typography>

      <TextFieldElement label="Function Name" name="function_name" fullWidth sx={{ pb: 2 }} />

      <FunctionTemplate no={1} />
      <FunctionTemplate no={2} />
      <FunctionTemplate no={3} />
    </>
  );
}

function FunctionTemplate({ no }) {
  return (
    <>
      <Typography fontSize={20} pb={2} pt={4} sx={{ textTransform: 'capitalize' }}>
        Function {no}
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name={`function_${no}_start_time`} label="Start Time (Second)" fullWidth />
          <TextFieldElement name={`function_${no}_end_time`} label="End Time(Second)" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name={`function_${no}_position_x`} label="Position(x)" fullWidth />
          <TextFieldElement name={`function_${no}_length_dx`} label="Length of x-axis(dx)" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name={`function_${no}_position_y`} label="Position(y)" fullWidth />
          <TextFieldElement name={`function_${no}_length_dy`} label="Length of y-axis(dy)" fullWidth />
        </Stack>
      </Stack>
    </>
  );
}
