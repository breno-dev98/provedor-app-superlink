import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { UserProvider } from '../context/UserContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';

export default function RootLayout() {
    return (
        <AuthProvider>
            <UserProvider>
                <SafeAreaProvider>
                    <Slot />
                </SafeAreaProvider>
            </UserProvider>
        </AuthProvider>
    );
}
