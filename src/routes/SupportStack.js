import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { defaultStackOptions } from "../navigation/options/defaultStackOptions"; // Certifique-se de que o caminho para defaultStackOptions está correto
import SupportScreen from "../screens/SupportScreen"; // Importe o novo componente SupportScreen

const Stack = createNativeStackNavigator();

export default function SupportStack() {
    return (
        <Stack.Navigator
            screenOptions={defaultStackOptions}
        >
            {/* Define a tela para o seu componente de Suporte */}
            <Stack.Screen name="SupportScreen" component={SupportScreen} options={{ title: "Suporte" }} />

        </Stack.Navigator>
    );
}
