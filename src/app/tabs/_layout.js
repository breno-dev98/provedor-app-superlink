import React, { useEffect } from 'react';
import { Tabs, useRouter, usePathname } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../constants/colors';
import { ActivityIndicator, View } from 'react-native';

const tabs = [
    { name: 'home', icon: 'home', label: 'Início', rootScreens: ['/tabs/home'] },
    { name: 'assignment', icon: 'assignment', label: 'Planos', rootScreens: ['/tabs/assignment'] },
    { name: 'financial', icon: 'attach-money', label: 'Finanças', rootScreens: ['/tabs/financial'] },
    { name: 'support', icon: 'support-agent', label: 'Suporte', rootScreens: ['/tabs/support'] },
];

export default function TabsLayout() {
    const { userToken, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading && !userToken) {
            router.replace('/login');
        }
    }, [userToken, isLoading]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.red.DEFAULT} />
            </View>
        );
    }

    if (!userToken) return null;

    const shouldShowTabBar = tabs.some(tab =>
        tab.rootScreens.some(root => pathname === root || pathname.startsWith(root + '/'))
    );

    return (
        <Tabs
            screenOptions={({ route }) => {
                const tab = tabs.find(t => t.name === route.name);
                return {
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name={tab?.icon} size={size} color={color} />
                    ),
                    tabBarActiveTintColor: colors.red.DEFAULT,
                    tabBarInactiveTintColor: colors.gray.text,
                    tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                    tabBarStyle: {
                        height: 80,
                        paddingTop: 10,
                        backgroundColor: colors.white.DEFAULT,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: -2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 5,
                        display: shouldShowTabBar ? 'flex' : 'none',
                    },
                    headerShown: false,
                };
            }}
        >
            {tabs.map(({ name, label }) => (
                <Tabs.Screen key={name} name={name} options={{ title: label }} />
            ))}

            <Tabs.Screen name="perfil" options={{ href: null }} />
        </Tabs>
    );
}
