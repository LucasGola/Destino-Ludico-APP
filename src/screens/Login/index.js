import React, { useState } from 'react';
import {
    TextInput, View, StyleSheet, Text,
    SafeAreaView, StatusBar, Button
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <SafeAreaView
            style={styles.mainContainer}
        >
            <StatusBar
                backgroundColor="#61dafb"
            />
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Login</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu endereço de e-mail"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#aaa"
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder="Insira sua senha"
                    placeholderTextColor="#aaa"
                />
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                    style={styles.icon}
                    onPress={toggleShowPassword}
                />
            </View>
            <Text
                style={styles.button}
                onPress={() => console.log('Botão de login')}
            >
                Login
            </Text>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    titleView: {
        paddingBottom: 30,
    },
    titleText: {
        fontSize: 20,
    },
    mainContainer: {
        marginTop: 70,
        margin: 40,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 14,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        color: '#333',
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
    button: {
        textAlign: 'center',
        fontSize: 15,
        padding: 10,
        backgroundColor: "#61dafb",
        borderRadius: 20,
    },
});

export default App;