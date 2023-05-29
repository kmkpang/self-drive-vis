import DashboardLayout from 'common/layouts/dashboard';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  return <h1>TESTTTT</h1>;
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
