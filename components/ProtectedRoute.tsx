import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('../auth/Login');
    }
  }, [user, router]);

  if (!user) {
    return (
      <View>
        <Text>Redirecting to login...</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;