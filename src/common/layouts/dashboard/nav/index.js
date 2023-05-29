import PropTypes from 'prop-types';
import { useEffect } from 'react';
// @mui
import { Box, Drawer, Typography } from '@mui/material';
// mock
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import NavSection from '../../../nav-section';
import Scrollbar from '../../../scrollbar';
//
import { useRouter } from 'next/router';
import useNavConfig from './config';
import UserDetail from './user';
import { Image } from 'mui-image';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useRouter();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          <NavContent />
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          <NavContent />
        </Drawer>
      )}
    </Box>
  );
}

function NavContent() {
  const navConfig = useNavConfig();

  return (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        {/* <Logo /> */}
        <Image src="/logo.png" height={80} fit="contain" alt="logo" />
        {/* <Typography
          fontSize={20}
          fontWeight="bold"
          sx={{
            backgroundColor: '#0cbaba',
            // backgroundImage:
            //   'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }}
        >
          Educational Innovation Management System
        </Typography> */}
      </Box>

      <UserDetail />

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );
}
