import DashboardLayout from 'common/layouts/dashboard';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
} from '@mui/material';
import { getTestScenario } from 'services/supabase.service';
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function TestScenario() {
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
  const id = Number(router?.query?.slug);
  const { data } = useQuery({
    queryKey: ['getTestScenario'],
    queryFn: getTestScenario,
    select: (data) => data?.find((x) => x.id === id && x),
  });

  const mappingData = [
    {
      type: 'isosurface',
      x: [
        Number(data?.function_1_position_x),
        Number(data?.function_1_position_x),
        Number(data?.function_1_position_x),
        Number(data?.function_1_position_x),
        Number(data?.function_1_length_dx) + Number(data?.function_1_position_x),
        Number(data?.function_1_length_dx) + Number(data?.function_1_position_x),
        Number(data?.function_1_length_dx) + Number(data?.function_1_position_x),
        Number(data?.function_1_length_dx) + Number(data?.function_1_position_x),
      ],
      y: [
        Number(data?.function_1_position_y),
        Number(data?.function_1_length_dy) + Number(data?.function_1_position_y),
        Number(data?.function_1_position_y),
        Number(data?.function_1_length_dy) + Number(data?.function_1_position_y),
        Number(data?.function_1_position_y),
        Number(data?.function_1_length_dy) + Number(data?.function_1_position_y),
        Number(data?.function_1_position_y),
        Number(data?.function_1_length_dy) + Number(data?.function_1_position_y),
      ],
      z: [
        Number(data?.function_1_start_time),
        Number(data?.function_1_start_time),
        Number(data?.function_1_end_time),
        Number(data?.function_1_end_time),
        Number(data?.function_1_start_time),
        Number(data?.function_1_start_time),
        Number(data?.function_1_end_time),
        Number(data?.function_1_end_time),
      ],
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      isomin: 0,
      isomax: 16,
      colorscale: 'Blues',
      showscale: false,
    },
    {
      type: 'isosurface',
      x: [
        Number(data?.function_2_position_x),
        Number(data?.function_2_position_x),
        Number(data?.function_2_position_x),
        Number(data?.function_2_position_x),
        Number(data?.function_2_length_dx) + Number(data?.function_2_position_x),
        Number(data?.function_2_length_dx) + Number(data?.function_2_position_x),
        Number(data?.function_2_length_dx) + Number(data?.function_2_position_x),
        Number(data?.function_2_length_dx) + Number(data?.function_2_position_x),
      ],
      y: [
        Number(data?.function_2_position_y),
        Number(data?.function_2_length_dy) + Number(data?.function_2_position_y),
        Number(data?.function_2_position_y),
        Number(data?.function_2_length_dy) + Number(data?.function_2_position_y),
        Number(data?.function_2_position_y),
        Number(data?.function_2_length_dy) + Number(data?.function_2_position_y),
        Number(data?.function_2_position_y),
        Number(data?.function_2_length_dy) + Number(data?.function_2_position_y),
      ],
      z: [
        Number(data?.function_2_start_time),
        Number(data?.function_2_start_time),
        Number(data?.function_2_end_time),
        Number(data?.function_2_end_time),
        Number(data?.function_2_start_time),
        Number(data?.function_2_start_time),
        Number(data?.function_2_end_time),
        Number(data?.function_2_end_time),
      ],
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      isomin: 0,
      isomax: 20,
      colorscale: 'Reds',
      showscale: false,
    },
    {
      type: 'isosurface',
      x: [
        Number(data?.function_3_position_x),
        Number(data?.function_3_position_x),
        Number(data?.function_3_position_x),
        Number(data?.function_3_position_x),
        Number(data?.function_3_length_dx) + Number(data?.function_3_position_x),
        Number(data?.function_3_length_dx) + Number(data?.function_3_position_x),
        Number(data?.function_3_length_dx) + Number(data?.function_3_position_x),
        Number(data?.function_3_length_dx) + Number(data?.function_3_position_x),
      ],
      y: [
        Number(data?.function_3_position_y),
        Number(data?.function_3_length_dy) + Number(data?.function_3_position_y),
        Number(data?.function_3_position_y),
        Number(data?.function_3_length_dy) + Number(data?.function_3_position_y),
        Number(data?.function_3_position_y),
        Number(data?.function_3_length_dy) + Number(data?.function_3_position_y),
        Number(data?.function_3_position_y),
        Number(data?.function_3_length_dy) + Number(data?.function_3_position_y),
      ],
      z: [
        Number(data?.function_3_start_time),
        Number(data?.function_3_start_time),
        Number(data?.function_3_end_time),
        Number(data?.function_3_end_time),
        Number(data?.function_3_start_time),
        Number(data?.function_3_start_time),
        Number(data?.function_3_end_time),
        Number(data?.function_3_end_time),
      ],
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      colorscale: 'Greens',
      isomin: -10,
      isomax: 10,
      showscale: false,
    },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h4" pb={4}>
            Sl.No. {router?.query?.slug}
          </Typography>
          <Typography variant="h5" pb={4}>
            Overlap Volume: {data?.overlap_volume}%
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box textAlign={'end'} height={'450px'} display={'block'} overflow={'auto'}>
            <Plot
              data={mappingData}
              layout={{
                width: 500,
                height: 500,
                title: 'A Fancy Plot',
                scene: {
                  aspectratio: {
                    x: 1,
                    y: 1,
                    z: 1,
                  },
                  xaxis: {
                    range: [0, 15],
                    title: {
                      text: 'X',
                    },
                  },
                  yaxis: {
                    range: [0, 15],
                    title: {
                      text: 'Y',
                    },
                  },
                  zaxis: {
                    range: [0, 15],
                    title: {
                      text: 'Z - Time',
                    },
                  },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Sl.No.</TableCell>
              <TableCell align="center">No. of lanes</TableCell>
              <TableCell align="center">Traffic signs</TableCell>
              <TableCell align="center">Weather</TableCell>
              <TableCell align="center">UAV coordinates</TableCell>
              <TableCell align="center">Type of intersection</TableCell>
              <TableCell align="center">Road condition</TableCell>
              <TableCell align="center">Vehicle</TableCell>
              <TableCell align="center">Pedestrian</TableCell>
              <TableCell align="center">Trafiic light</TableCell>
              <TableCell align="center">Function</TableCell>
              <TableCell align="center">Overlap volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={router?.query?.slug} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {router?.query?.slug}
              </TableCell>
              <TableCell>{data?.lane_count}</TableCell>
              <TableCell align="center">{data?.traffic_sign}</TableCell>
              <TableCell align="center">{data?.weather}</TableCell>
              <TableCell align="center">{data?.uav_coordinates}</TableCell>
              <TableCell align="center">{data?.intersection_type}</TableCell>
              <TableCell align="center">{data?.road_condition}</TableCell>
              <TableCell align="center">{`[${data?.vehicle_time},${data?.vehicle_position},${data?.vehicle_distance},${data?.vehicle_status}]`}</TableCell>
              <TableCell align="center">{`[${data?.pedestrian_time},${data?.pedestrian_position},${data?.pedestrian_distance},${data?.pedestrian_status}]`}</TableCell>
              <TableCell align="center">{`[${data?.traffic_light_time},${data?.traffic_light_position},${data?.traffic_light_distance},${data?.traffic_light_status}]`}</TableCell>
              <TableCell align="center">{data?.function_name}</TableCell>
              <TableCell align="center">{`${data?.overlap_volume}%`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

TestScenario.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
