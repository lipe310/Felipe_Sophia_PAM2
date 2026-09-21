import { View, Text, TextInput, Button, Image } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{ width: 200, height: 200 }}
      />

      <Text>Digite o e-mail</Text>

      <TextInput placeholder="fulano@hotmail.com" />

      <Text>Senha</Text>

      <TextInput placeholder="abc@123" />

      <Button
        title="Entrar"
        onPress={() => alert('Login pressionado')}
      />

    </View>
  );
}