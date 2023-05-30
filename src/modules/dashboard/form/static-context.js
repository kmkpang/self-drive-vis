import { Stack, Typography } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

export function StaticContextForm() {
  return (
    <>
      <Typography variant="h5" pb={2}>
        Static Context
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name="lane_count" label="Number of lanes" fullWidth />
          <TextFieldElement name="traffic_sign" label="Traffic Sign" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextFieldElement name="weather" label="Weather" fullWidth />
          <TextFieldElement name="uav_coordinates" label="UAV Coordinates" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextFieldElement label="Type of Intersection" name="intersection_type" fullWidth />
          <TextFieldElement label="Road Condition" name="road_condition" fullWidth />
        </Stack>
      </Stack>
    </>
  );
}
