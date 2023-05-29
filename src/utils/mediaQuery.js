import useMediaQuery from '@mui/material/useMediaQuery';

export const isMobile = (props) => {
  return useMediaQuery((theme) => theme.breakpoints.down('sm'));
};

export const isTablet = (props) => {
  return useMediaQuery((theme) => theme.breakpoints.up('sm'));
};

export const isLaptop = (props) => {
  return useMediaQuery((theme) => theme.breakpoints.up('md'));
};

export const isDesktop = (props) => {
  return useMediaQuery((theme) => theme.breakpoints.up('lg'));
};
