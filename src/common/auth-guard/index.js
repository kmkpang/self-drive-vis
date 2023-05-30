import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

export default function AuthGuard(props) {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  useEffect(() => {
    if (!router.isReady || props.disabled) {
      return;
    }

    if (!isLoaded || !userId) {
      router.push('/sign-in');
    }
  }, []);

  return props.children;
}
