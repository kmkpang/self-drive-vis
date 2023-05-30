import { Stack, Typography } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

export default function DynamicContextForm() {
  return (
    <>
      <Typography variant="h5" pb={2}>
        Dynamic Context
      </Typography>

      <DynamicTemplate fieldname="pedestrian" />
      <DynamicTemplate fieldname="vehicle" />
      <DynamicTemplate fieldname="traffic_light" />
    </>
  );
}

function DynamicTemplate({ fieldname }) {
  return (
    <>
      <Typography fontSize={20} pb={2} pt={4} sx={{ textTransform: 'capitalize' }}>
        {fieldname.replace('_', ' ')}
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name={`${fieldname}_time`} label="Time" fullWidth />
          <TextFieldElement name={`${fieldname}_position`} label="Position(x,y)" placeholder="(x,y)" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name={`${fieldname}_distance`} label="Distance" fullWidth />
          <TextFieldElement name={`${fieldname}_status`} label="Status" fullWidth />
        </Stack>
      </Stack>
    </>
  );
}
