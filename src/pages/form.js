import React, { useState, useEffect } from 'react';
import { Divider, Paper, Typography, Button, Box } from '@mui/material';
import DashboardLayout from 'common/layouts/dashboard';
import DynamicContextForm from 'modules/dashboard/form/dynamic-context';
import ExpectedFunctionForm from 'modules/dashboard/form/expected-function';
import { StaticContextForm } from 'modules/dashboard/form/static-context';
import { FormContainer, useForm } from 'react-hook-form-mui';
import { setTestScenario } from 'services/supabase.service';
import { useRouter } from 'next/router';
export default function Form() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  function overlapVolume(a, b, tol = 1e-9) {
    const deltaX = Math.min(a.x + a.dx, b.x + b.dx) - Math.max(a.x, b.x);
    const deltaY = Math.min(a.y + a.dy, b.y + b.dy) - Math.max(a.y, b.y);
    const deltaZ = Math.min(a.z + a.dz, b.z + b.dz) - Math.max(a.z, b.z);

    if (deltaX > tol && deltaY > tol && deltaZ > tol) return deltaX * deltaY * deltaZ;
    return 0;
  }

  function totalVolume(bars) {
    let total = 0;
    for (let bar of bars) {
      total += bar.dx * bar.dy * bar.dz;
    }
    return total;
  }

  async function handleSubmit(data) {
    try {
      setLoading(true);
      await inputForm(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  async function inputForm(value_useForm) {
    try {
      const bars = [
        {
          x: Number(value_useForm?.function_1_position_x),
          y: Number(value_useForm?.function_1_position_y),
          z: Number(value_useForm?.function_1_start_time),
          dx: Number(value_useForm?.function_1_length_dx),
          dy: Number(value_useForm?.function_1_length_dy),
          dz: Number(value_useForm?.function_1_end_time - value_useForm?.function_1_start_time),
        },
        {
          x: Number(value_useForm?.function_2_position_x),
          y: Number(value_useForm?.function_2_position_y),
          z: Number(value_useForm?.function_2_start_time),
          dx: Number(value_useForm?.function_2_length_dx),
          dy: Number(value_useForm?.function_2_length_dy),
          dz: Number(value_useForm?.function_2_end_time - value_useForm?.function_2_start_time),
        },
        {
          x: Number(value_useForm?.function_3_position_x),
          y: Number(value_useForm?.function_3_position_y),
          z: Number(value_useForm?.function_3_start_time),
          dx: Number(value_useForm?.function_3_length_dx),
          dy: Number(value_useForm?.function_3_length_dy),
          dz: Number(value_useForm?.function_3_end_time - value_useForm?.function_3_start_time),
        },
      ];
      const overlap1 = overlapVolume(bars[0], bars[1]);
      const overlap2 = overlapVolume(bars[0], bars[2]);
      const overlap3 = overlapVolume(bars[1], bars[2]);
      const threeWayOverlap = overlapVolume(bars[0], {
        x: Math.max(bars[1].x, bars[2].x),
        y: Math.max(bars[1].y, bars[2].y),
        z: Math.max(bars[1].z, bars[2].z),
        dx: Math.min(bars[1].dx, bars[2].dx),
        dy: Math.min(bars[1].dy, bars[2].dy),
        dz: Math.min(bars[1].dz, bars[2].dz),
      });
      const overlapVol = overlap1 + overlap2 + overlap3 - 2 * threeWayOverlap;
      const totalVol = totalVolume(bars) - overlapVol;
      const overlapPercentage = (overlapVol / totalVol) * 100;
      console.log('Overlapping volume:', overlapVol);
      console.log('Total volume:', totalVol);
      console.log('Overlap percentage : ', (overlapVol / totalVol) * 100, '%');
      value_useForm.overlap_volume = overlapPercentage.toFixed(3);
      console.log('inputForm', value_useForm);
      await setTestScenario(value_useForm);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormContainer onSuccess={(data) => handleSubmit(data)}>
      <Typography variant="h4" pb={4}>
        Test Scenario Generation
      </Typography>
      <Typography variant="h4" pb={4}>
        Input Value
      </Typography>
      <Paper sx={{ p: 3 }}>
        <StaticContextForm />
        <Divider sx={{ my: 5 }} />
        <DynamicContextForm />
        <Divider sx={{ my: 5 }} />
        <ExpectedFunctionForm />
        <Box
          m={1}
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button type={'submit'} disabled={loading} variant="contained" size="large" sx={{ textAlign: 'end' }}>
            Confirm
          </Button>
        </Box>
      </Paper>
    </FormContainer>
  );
}

Form.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
