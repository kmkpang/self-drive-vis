import { Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { SelectElement, TextFieldElement } from 'react-hook-form-mui';
import { getIntersectionType, getRoadCondition, getWeatherOptions } from 'services/supabase.service';

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
          <WeatherFieldElement />
          <TextFieldElement name="uav_coordinates" label="UAV Coordinates" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <IntersectionTypeFieldElement />
          <RoadConditionFieldElement />
        </Stack>
      </Stack>
    </>
  );
}

function WeatherFieldElement() {
  const { data } = useQuery({ queryKey: ['getTrafficSign'], queryFn: getWeatherOptions });

  return <SelectElement label="weather" name="weather" options={data ?? []} sx={{ width: '100%' }} />;
}
function IntersectionTypeFieldElement() {
  const { data } = useQuery({
    queryKey: ['getIntersectionType'],
    queryFn: getIntersectionType,
  });
  return (
    <SelectElement label="Type of Intersection" name="intersection_type" options={data ?? []} sx={{ width: '100%' }} />
  );
}

function RoadConditionFieldElement() {
  const { data } = useQuery({
    queryKey: ['getRoadCondition'],
    queryFn: getRoadCondition,
  });
  return <SelectElement label="Road Condition" name="road_condition" options={data ?? []} sx={{ width: '100%' }} />;
}
