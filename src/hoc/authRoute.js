import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';

const authRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { user } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
      if (!user) {
        router.push('/');
      }
    }, [user, router]);

    return user ? <WrappedComponent {...props} /> : null;
  };

  Wrapper.displayName = `authRoute(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return Wrapper;
};

export default authRoute;
