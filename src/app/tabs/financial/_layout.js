// /app/financial/_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import { defaultStackOptions } from '../../../navigation/options/defaultStackOptions';

export default function FinancialLayout() {
    return (
        <Stack screenOptions={defaultStackOptions}>
            <Stack.Screen name="index" options={{ title: "Finanças" }} />
        </Stack>
    );
}
