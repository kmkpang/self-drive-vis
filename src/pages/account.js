// @mui
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab, Typography } from '@mui/material';
// components
import DashboardLayout from 'common/layouts/dashboard';
// import PasswordTab from 'modules/account/password';
// import UserTab from 'modules/account/user';
import { useState } from 'react';

const tabs = [
  // { label: 'ข้อมูลทั่วไป', value: 'user', children: <UserTab /> },
  // { label: 'เปลี่ยนรหัสผ่าน', value: 'password', children: <PasswordTab /> },
];

export default function AccountManagePage() {
  const [value, setValue] = useState('user');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Typography variant="h5" gutterBottom>
          จัดการข้อมูลผู้ใช้งาน
        </Typography>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                {tabs.map(({ label, value }) => (
                  <Tab key={value} label={label} value={value} />
                ))}
              </TabList>
            </Box>
            {tabs.map(({ children, value }) => (
              <TabPanel key={value} value={value}>
                {children}
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </Container>
    </>
  );
}

AccountManagePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
