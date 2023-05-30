import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { useEffect } from 'react';
import { getCurrentUserInfo } from 'services/auth.service';
import userStore from 'stores/user.store';
import { useAuth } from '@clerk/nextjs';

export default function AuthGuard(props) {
  const router = useRouter();
  const cookies = nookies.get();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  useEffect(() => {
    if (!router.isReady || props.disabled) {
      return;
    }

    console.log('cookies', cookies.__clerk_db_jwt);
    console.log('user', userId);

    if (!isLoaded || !userId) {
      router.push('/sign-in');
    }
  }, [router]);

  return props.children;
}
