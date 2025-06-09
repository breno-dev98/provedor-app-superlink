import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AssignmentScreen from "../screens/AssignmentScreen";
import { defaultStackOptions } from "../navigation/options/defaultStackOptions"
import WifiConfigurationScreen from "../screens/WiFiConfigurationScreen";


const Stack = createNativeStackNavigator();

export default function AssignmentStack() {
    return (
        <Stack.Navigator
            screenOptions={defaultStackOptions}
        >
            <Stack.Screen name="PlanosScreen" component={AssignmentScreen} options={{ title: "Meus Planos" }} />
            <Stack.Screen name="ConfiguracaoWifi" component={WifiConfigurationScreen} options={{title: "Configuração de wi-fi"}}/>

        </Stack.Navigator>
    );
}
