import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View, StyleSheet } from 'react-native'; // Importe ActivityIndicator e View para o estado de carregamento
import { NavigationContainer } from '@react-navigation/native'; // Importe NavigationContainer, essencial para navegação

import { AuthProvider, useAuth } from './src/context/AuthContext'; // Importe AuthProvider e useAuth
import NavTab from './src/components/NavTab'; // Componente que exibe a navegação após o login
import LoginScreen from './src/screens/LoginScreen'; // Tela de login

// Componente interno para lidar com a lógica de navegação baseada no estado de autenticação
const AppNavigator = () => {
  // Use o hook useAuth para acessar o userToken e isLoading do contexto
  const { userToken, isLoading } = useAuth();

  // Se o aplicativo estiver carregando (verificando o token no AsyncStorage), mostre um indicador
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Se houver um userToken, significa que o usuário está autenticado, então mostre o NavTab
  // Caso contrário, mostre a tela de Login
  return (
    <NavigationContainer>
      {userToken ? <NavTab /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    // Envolva toda a aplicação com AuthProvider para que o contexto esteja disponível
    <AuthProvider>
      <SafeAreaProvider>
        {/* Renderize o AppNavigator que contém a lógica de navegação condicional */}
        <AppNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
