import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
    ActivityIndicator // Importe ActivityIndicator para o estado de carregamento
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import logo from "../../assets/logo-no-background.png";
import { colors } from '../constants/colors';
import { useAuth } from '../context/AuthContext'; // Importe o hook useAuth

export default function LoginScreen() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    // Use o hook useAuth para obter a função de login e o estado de carregamento
    const { login, isLoading } = useAuth();

    const handleLogin = () => {
        if (cpf.length === 0 || senha.length === 0) {
            console.log('Por favor, preencha todos os campos.');
            return;
        }
        // Chame a função de login do contexto, passando o CPF e a senha
        // Assumindo que a função 'login' no seu AuthContext.js aceita email/username e senha
        // Neste caso, você usaria 'cpf' como seu identificador de usuário
        login(cpf, senha);
    };

    const handlePrimeiroAcesso = () => {
        console.log('Usuário clicou em Primeiro Acesso.');
    };

    const handleContrate = () => {
        console.log('Usuário clicou em Contrate.');
    };

    const handleForgotPassword = () => {
        console.log('Usuário clicou em Esqueci minha senha.');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container}>
                        <Image
                            source={logo}
                            style={styles.logo}
                            resizeMode="contain"
                        />

                        <View style={styles.inputContainer}>
                            <MaterialIcons name="person" size={24} color={colors.gray.DEFAULT} style={styles.inputIcon} />
                            <TextInput
                                style={styles.inputWithIcon}
                                placeholder="CPF"
                                placeholderTextColor={colors.gray.text}
                                keyboardType="numeric"
                                value={cpf}
                                onChangeText={(text) => setCpf(text)}
                                maxLength={11}
                                editable={!isLoading} // Desabilita a edição enquanto carrega
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <MaterialIcons name="lock" size={24} color={colors.gray.DEFAULT} style={styles.inputIcon} />
                            <TextInput
                                style={styles.inputWithIcon}
                                placeholder="Senha"
                                placeholderTextColor={colors.gray.text}
                                secureTextEntry={true}
                                value={senha}
                                onChangeText={(text) => setSenha(text)}
                                editable={!isLoading} // Desabilita a edição enquanto carrega
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleLogin}
                            disabled={isLoading} // Desabilita o botão enquanto carrega
                        >
                            {isLoading ? (
                                <ActivityIndicator size="small" color={colors.white.DEFAULT} />
                            ) : (
                                <Text style={styles.loginButtonText}>Entrar</Text>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.firstAccessButtonInverted}
                            onPress={handlePrimeiroAcesso}
                            disabled={isLoading} // Desabilita o botão enquanto carrega
                        >
                            <Text style={styles.firstAccessButtonTextInverted}>Primeiro acesso</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.contrateButton}
                            onPress={handleContrate}
                            disabled={isLoading} // Desabilita o botão enquanto carrega
                        >
                            <Text style={styles.contrateButtonText}>Contrate</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.forgotPasswordButton}
                            onPress={handleForgotPassword}
                            disabled={isLoading} // Desabilita o botão enquanto carrega
                        >
                            <Text style={styles.forgotPasswordButtonText}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.gray.soft,
    },
    keyboardAvoidingView: {
        flex: 1,
        width: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    container: {
        width: '90%',
        maxWidth: 400,
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 75,
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: colors.white.DEFAULT,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray.border,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    inputIcon: {
        marginRight: 10,
    },
    inputWithIcon: {
        flex: 1,
        fontSize: 16,
        color: colors.black.text,
        fontFamily: 'Inter_400Regular',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: colors.red.DEFAULT,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    loginButtonText: {
        color: colors.white.DEFAULT,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Inter_600SemiBold',
    },
    firstAccessButtonInverted: {
        width: '100%',
        height: 50,
        backgroundColor: colors.white.DEFAULT,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: colors.red.DEFAULT,
    },
    firstAccessButtonTextInverted: {
        color: colors.red.DEFAULT,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Inter_600SemiBold',
    },
    contrateButton: {
        marginTop: 10,
        width: '100%',
        height: 50,
        backgroundColor: colors.gray.DEFAULT,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    contrateButtonText: {
        color: colors.white.DEFAULT,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Inter_600SemiBold',
    },
    forgotPasswordButton: {
        marginTop: 10,
        paddingVertical: 10,
    },
    forgotPasswordButtonText: {
        color: colors.gray.DEFAULT,
        fontSize: 14,
        textDecorationLine: 'underline',
        fontFamily: 'Inter_400Regular',
    },
});
