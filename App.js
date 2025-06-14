import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext'; // Importe AuthProvider e useAuth
import { UserProvider } from './src/context/UserContext'
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </UserProvider>
    </AuthProvider>
  );
}

