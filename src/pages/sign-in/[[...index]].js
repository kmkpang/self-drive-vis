import { SignIn } from '@clerk/nextjs';
import { Container, Stack, Typography } from '@mui/material';

export default function Page() {
  return (
    <Container>
      <Stack minHeight="100vh" alignItems="center" justifyContent="center">
        <Typography variant="h5" pb={2}>
          Test Scenario Generation and Visualization Platform
        </Typography>
        <Typography variant="h5" pb={2}>
          for Unmanned Driving System Based on Spatial-temporal Data
        </Typography>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" afterSignInUrl={'/'} />
      </Stack>
    </Container>
  );
}
