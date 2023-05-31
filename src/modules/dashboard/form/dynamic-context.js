import { Stack, Typography, Button, Grid } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';
import { useState } from 'react';

export default function DynamicContextForm() {
  const [inputPedestrian, setInputPedestrian] = useState([{ time: '', position: '', distance: '', status: '' }]);
  const [inputVehicle, setInputVehicle] = useState([{ time: '', position: '', distance: '', status: '' }]);

  const addFields = (x) => {
    let newfield = { time: '', position: '', distance: '', status: '' };
    if (x === 'pedestrian') setInputPedestrian([...inputPedestrian, newfield]);
    if (x === 'vehicle') setInputVehicle([...inputVehicle, newfield]);
  };

  const removeFields = (index, x) => {
    if (x === 'pedestrian') {
      let data = [...inputPedestrian];
      data.splice(index, 1);
      setInputPedestrian(data);
    } else {
      let data = [...inputVehicle];
      data.splice(index, 1);
      setInputVehicle(data);
    }
  };

  return (
    <>
      <Typography variant="h5" pb={2}>
        Dynamic Context
      </Typography>
      <>
        {inputPedestrian?.map((input, index) => (
          <>
            <Grid container>
              <Grid item sm={11}>
                <Typography fontSize={20} pb={2} pt={4} sx={{ textTransform: 'capitalize' }}>
                  Pedestrian {index + 1}
                </Typography>
              </Grid>
              <Grid item sm={1} textAlign={'end'}>
                {inputPedestrian.length > 1 && (
                  <Typography
                    fontSize={16}
                    pb={2}
                    pt={4}
                    sx={{ textTransform: 'capitalize' }}
                    onClick={() => removeFields(index, 'pedestrian')}
                  >
                    x
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <TextFieldElement name={`pedestrian_time_${index + 1}`} label="Time(Seconds)" fullWidth />
                <TextFieldElement
                  name={`pedestrian_position_${index + 1}`}
                  label="Position(x,y) : *input with ()"
                  placeholder="(x,y)"
                  fullWidth
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextFieldElement name={`pedestrian_distance_${index + 1}`} label="Distance(m)" fullWidth />
                <TextFieldElement name={`pedestrian_status_${index + 1}`} label="Status" fullWidth />
              </Stack>
            </Stack>
          </>
        ))}
        {inputPedestrian.length < 2 && (
          <Button
            variant="contained"
            size="large"
            sx={{ textAlign: 'end', marginTop: '8px' }}
            onClick={() => addFields('pedestrian')}
          >
            Add +
          </Button>
        )}
      </>
      <>
        {inputVehicle?.map((input, index) => (
          <>
            <Grid container>
              <Grid item sm={11}>
                <Typography fontSize={20} pb={2} pt={4} sx={{ textTransform: 'capitalize' }}>
                  Vehicle {index + 1}
                </Typography>
              </Grid>
              <Grid item sm={1} textAlign={'end'}>
                {inputVehicle.length > 1 && (
                  <Typography
                    fontSize={16}
                    // color={""}
                    pb={2}
                    pt={4}
                    sx={{ textTransform: 'capitalize' }}
                    onClick={() => removeFields(index, 'vehicle')}
                  >
                    x
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <TextFieldElement name={`vehicle_time_${index + 1}`} label="Time(Seconds)" fullWidth />
                <TextFieldElement
                  name={`vehicle_position_${index + 1}`}
                  label="Position(x,y) : *input with ()"
                  placeholder="(x,y)"
                  fullWidth
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextFieldElement name={`vehicle_distance_${index + 1}`} label="Distance(m)" fullWidth />
                <TextFieldElement name={`vehicle_status_${index + 1}`} label="Status" fullWidth />
              </Stack>
            </Stack>
          </>
        ))}
        {inputVehicle.length < 2 && (
          <Button
            variant="contained"
            size="large"
            sx={{ textAlign: 'end', marginTop: '8px' }}
            onClick={() => addFields('vehicle')}
          >
            Add +
          </Button>
        )}
      </>
      <>
        <Grid container>
          <Typography fontSize={20} pb={2} pt={4} sx={{ textTransform: 'capitalize' }}>
            Traffic Light
          </Typography>
        </Grid>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <TextFieldElement name={`traffic_light_time`} label="Time(Seconds)" fullWidth />
            <TextFieldElement
              name={`traffic_light_position`}
              label="Position(x,y) : *input with ()"
              placeholder="(x,y)"
              fullWidth
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextFieldElement name={`traffic_light_distance`} label="Distance(m)" fullWidth />
            <TextFieldElement name={`traffic_light_status`} label="Status" fullWidth />
          </Stack>
        </Stack>
      </>
    </>
  );
}
