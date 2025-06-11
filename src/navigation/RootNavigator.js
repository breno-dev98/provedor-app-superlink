import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../context/AuthContext'; // Ajuste o caminho
import NavTab from '../components/NavTab'; // Ajuste o caminho
import LoginScreen from '../screens/LoginScreen'; // Ajuste o caminho
import { colors } from '../constants/colors';

const RootNavigator = () => {
    const { userToken, isLoading } = useAuth();

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.red.dark} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {userToken ? <NavTab /> : <LoginScreen />}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RootNavigator;