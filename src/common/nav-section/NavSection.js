import PropTypes from 'prop-types';
import Link from 'next/link';

// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
import _ from 'lodash';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;
  const router = useRouter();
  const pathname = router?.pathname;

  if (_.isNil(path)) {
    return <></>;
  }

  return (
    <StyledNavItem
      component={Link}
      href={path}
      sx={{
        bgcolor: (!path && '#edeff1') || (path === pathname && '#edeff1'),
        '&.active': {
          color: 'text.primary',
          bgcolor: 'red',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
