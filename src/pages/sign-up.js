import { SignUp } from '@clerk/nextjs';
import { Container, Stack } from '@mui/material';

export default function Page() {
  return (
    <Container>
      <Stack minHeight="100vh" alignItems="center" justifyContent="center">
        <SignUp />
      </Stack>
    </Container>
  );
}
