import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { useEffect } from 'react';
import { getCurrentUserInfo } from 'services/auth.service';
import userStore from 'stores/user.store';

export default function AuthGuard(props) {
  const router = useRouter();
  const cookies = nookies.get();
  const setUser = userStore((e) => e.setUser);

  useQuery({
    queryKey: ['getCurrentUserInfo'],
    queryFn: getCurrentUserInfo,
    onSuccess: (user) => console.log(user),
  });

  useEffect(() => {
    if (!router.isReady || props.disabled) {
      return;
    }

    console.log('cookies', cookies.__clerk_db_jwt);

    if (!cookies.__clerk_db_jwt) {
      router.push('/sign-in');
    }
  }, [cookies.__clerk_db_jwt, props.disabled, router]);

  return props.children;
}
