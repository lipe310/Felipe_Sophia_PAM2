import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native'; // CORRIGIDO: react-native
import styles from './Estilo';
import { verificarLogin } from './funcoes'; // CORRIGIDO: nome do arquivo sem espaço

export default function Login({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function fazerLogin() {
        if (verificarLogin(usuario, senha)) {
            navigation.navigate('Home'); // CORRIGIDO: Home com H maiúsculo
        } else {
            Alert.alert(
                'Erro',
                'Usuário ou senha incorretos!'
            );
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
                }}
                style={styles.imagem}
            />
            
            <Text style={styles.titulo}>Login</Text>
            
            <Text style={styles.label}>Usuário</Text>
            <TextInput // CORRIGIDO: espaço adicionado
                placeholder="Digite seu usuário"
                style={styles.input}
                value={usuario}
                onChangeText={setUsuario}
            />
            
            <Text style={styles.label}>Senha</Text>
            <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
            />
            
            <View style={styles.botao}>
                <Button
                    title="Entrar"
                    onPress={fazerLogin}
                    color="#007AFF"
                />
            </View>
        </View>
    );
}