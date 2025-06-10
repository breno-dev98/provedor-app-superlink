// NavTab.js
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "../routes/HomeStack";
import AssignmentStack from "../routes/AssignmentStack";
import { colors } from "../constants/colors";

const Tab = createBottomTabNavigator();

/* 
 @param {object} state
 @returns {string|null}
 */
function getActiveRouteName(state) {
    if (!state || !state.routes || state.routes.length === 0) {
        return null;
    }

    const route = state.routes[state.index];

    if (route.state) {

        return getActiveRouteName(route.state);
    }

    return route.name;
}


const screens = [
    {
        name: "Inicio",
        component: HomeStack,
        icon: "home",
    },
    {
        name: "Planos",
        component: AssignmentStack,
        icon: "assignment",
    },
];

export function NavTab() {
    const [nomeRotaAtual, setNomeRotaAtual] = useState(null);

    const rotasProfundasVisiveis = ["Home", "PlanosScreen"];

    return (
        <NavigationContainer
            onStateChange={(state) => {
                const rotaAtiva = getActiveRouteName(state);
                setNomeRotaAtual(rotaAtiva);
            }}
        >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        const screen = screens.find(s => s.name === route.name);
                        return (
                            <MaterialIcons
                                name={screen?.icon || "question"}
                                size={30}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: colors.red.DEFAULT, 
                    tabBarInactiveTintColor: colors.gray.text, 
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarStyle: {
                        ...styles.tabBar, 
                        display: rotasProfundasVisiveis.includes(nomeRotaAtual) ? "flex" : "none",
                    },
                    headerShown: false,
                })}
            >
                {/* Mapeia o array de telas para criar componentes Tab.Screen */}
                {screens.map(({ name, component }) => (
                    <Tab.Screen
                        key={name}
                        name={name}
                        component={component}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        paddingTop: 10,
        backgroundColor: colors.white.DEFAULT,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
    tabBarLabel: {
        fontSize: 12,
        marginBottom: 5,
    },
});
