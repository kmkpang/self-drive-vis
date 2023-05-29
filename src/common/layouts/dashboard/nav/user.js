import { Avatar, Box, Link, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import userStore from 'stores/user.store';
import _ from 'lodash';
import { randomAvatarByUser } from 'utils/avatar';
import { useUser } from '@clerk/nextjs';

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

export default function UserDetail() {
  const { user } = useUser();

  console.log('user', user);

  if (_.isEmpty(user)) {
    return <></>;
  }

  return (
    <Box sx={{ mb: 5, mx: 2.5 }}>
      <Link underline="none">
        <StyledAccount>
          <Avatar src={user.profileImageUrl} alt="photoURL" />

          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              {user.username}
            </Typography>
          </Box>
        </StyledAccount>
      </Link>
    </Box>
  );
}
