import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WiFiScreen from "../screens/WiFiScreen";
import Profile from "../screens/Profile";
import UserInfoScreen from "../screens/UserInfoScreen";
import {defaultStackOptions} from "../navigation/options/defaultStackOptions"
import NotificationsScreen from "../screens/NotificationsScreen";
import NotificationDetailScreen from "../screens/NotificationDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                ...defaultStackOptions,
                headerBackground: route.name === "Home" ? undefined : defaultStackOptions.headerBackground,
            })}
        >

            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Perfil" component={Profile} />
            <Stack.Screen name="Notificacoes" component={NotificationsScreen} options={{title: "Notificações"}}/>
            <Stack.Screen name="NotificationDetail" component={NotificationDetailScreen} options={{ title: "Notificações" }} />
            <Stack.Screen name="MeusDados" component={UserInfoScreen} options={{title: "Meus Dados"}}/>
            <Stack.Screen name="Wifi" component={WiFiScreen} options={{ title: "Meu Wi-Fi" }} />
        </Stack.Navigator>
    );
}
