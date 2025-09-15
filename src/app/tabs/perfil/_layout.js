import React from 'react';
import { Stack } from 'expo-router';
import { defaultStackOptions } from '../../../navigation/options/defaultStackOptions';

export default function PerfilLayout() {
    return (
        <Stack screenOptions={defaultStackOptions}>
            <Stack.Screen name="index" options={{ title: "Perfil" }} />
            <Stack.Screen name="Contratos" options={{ title: "Meus Contratos" }} />
            <Stack.Screen name="Privacidade" options={{ title: "Privacidade" }} />
            <Stack.Screen name="Sobre" options={{ title: "Sobre" }} />
            <Stack.Screen name="Notificacoes" options={{ title: "Minhas Notificações" }} />
        </Stack>
    );
}
