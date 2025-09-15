// /app/assignment/_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import { defaultStackOptions } from '../../../navigation/options/defaultStackOptions';

export default function AssignmentLayout() {
    return (
        <Stack screenOptions={defaultStackOptions}>
            <Stack.Screen name="index" options={{ title: "Meus Planos" }} />
            <Stack.Screen name="ConfiguracaoWifi" options={{ title: "Configuração de wi-fi" }} />
        </Stack>
    );
}
