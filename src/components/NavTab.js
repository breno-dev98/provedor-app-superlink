// NavTab.js
import React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "../routes/HomeStack";
import AssignmentStack from "../routes/AssignmentStack";
import { colors } from "../constants/colors";

const Tab = createBottomTabNavigator();
function getActiveRouteName(route) {
    if (!route) return "";

    const state = route.state ?? route;
    const routeName = state.routes?.[state.index ?? 0];

    if (routeName?.state) {
        return getActiveRouteName(routeName);
    }

    return routeName?.name || "";
}
  

// Define em quais rotas a tab deve aparecer
function getTabBarVisibility(route) {
    const activeRouteName = getActiveRouteName(route);
    const visibleRoutes = ["Home", "PlanosScreen"]; // telas onde a tab deve aparecer
    return visibleRoutes.includes(activeRouteName) ? "flex" : "none";
}
  

const screens = [
    {
        name: "Início",
        component: HomeStack,
        icon: "home",
        options: ({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                ...styles.tabBar,
                display: getTabBarVisibility(route),
            },
        }),
    },
    {
        name: "Planos",
        component: AssignmentStack,
        icon: "assignment",
        options: ({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                ...styles.tabBar,
                display: getTabBarVisibility(route),
            },
        }),
    },
];

export function NavTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => {
                    const screen = screens.find((screen) => screen.name === route.name);
                    return {
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name={screen?.icon || "question"} size={30} color={color} />
                        ),
                        tabBarActiveTintColor: colors.red.DEFAULT,
                        tabBarInactiveTintColor: colors.gray.text,
                        tabBarLabelStyle: styles.tabBarLabel,
                    };
                }}
            >
                {screens.map(({ name, component, options, icon }) => (
                    <Tab.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={(props) => ({
                            ...options(props),
                            tabBarIcon: ({ color }) => (
                                <MaterialIcons name={icon} size={30} color={color} />
                            ),
                            tabBarActiveTintColor: colors.red.DEFAULT,
                            tabBarInactiveTintColor: colors.gray.text,
                            tabBarLabelStyle: styles.tabBarLabel,
                        })}
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
    },
    tabBarLabel: {
        fontSize: 12,
    },
});
