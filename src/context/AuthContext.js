import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { TEST_CPF, TEST_PASSWORD } from '@env';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    // Função de login
    const login = async (cpf, password) => {
        setIsLoading(true);
        try {
            const response = await new Promise(resolve => setTimeout(() => {
                if (cpf === TEST_CPF && password === TEST_PASSWORD) {
                    resolve({ success: true, token: 'fake-jwt-token', user: { id: 1, name: 'Usuário Teste' } });
                } else {
                    resolve({ success: false, message: 'Credenciais inválidas' });
                }
            }, 1500));

            if (response.success) {
                const token = response.token;
                const user = response.user;

                await AsyncStorage.setItem('userToken', token);
                await AsyncStorage.setItem('userInfo', JSON.stringify(user));
                setUserToken(token);
                setUserInfo(user);
                Alert.alert('Sucesso', 'Login realizado com sucesso!');
            } else {
                Alert.alert('Erro de Login', response.message || 'Ocorreu um erro ao fazer login.');
                setUserToken(null);
                setUserInfo(null);
            }
        } catch (error) {
            console.error('Erro de login:', error);
            Alert.alert('Erro', 'Ocorreu um erro inesperado. Tente novamente.');
            setUserToken(null);
            setUserInfo(null);
        } finally {
            setIsLoading(false);
        }
    };

    // Função de logout
    const logout = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userInfo');
            setUserToken(null);
            setUserInfo(null);
            Alert.alert('Sucesso', 'Logout realizado com sucesso!');
        } catch (error) {
            console.error('Erro de logout:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao fazer logout.');
        } finally {
            setIsLoading(false);
        }
    };

    // Função para verificar se o usuário já está logado ao iniciar o app
    const checkLoginStatus = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const user = await AsyncStorage.getItem('userInfo');
            if (token) {
                setUserToken(token);
                setUserInfo(JSON.parse(user));
            }
        } catch (error) {
            console.error('Erro ao verificar status de login:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Efeito para carregar o token ao montar o componente
    useEffect(() => {
        checkLoginStatus();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                userToken,
                userInfo,
                isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para facilitar o uso do contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
