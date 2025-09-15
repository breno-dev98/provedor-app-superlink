// /app/home/_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import { defaultStackOptions } from '../../../navigation/options/defaultStackOptions';

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Wifi" options={{ title: "Meu Wi-Fi" }} />
        </Stack>
    );
}
