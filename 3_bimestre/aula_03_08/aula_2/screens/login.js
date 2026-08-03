import { View, Text, TextInput, Button, Image } from 'react-native';

export default function login({ navigation }) {

    return (
    
    <View>

        <Image
        source={{
            uri: 'https://www.aquariuscuritiba.com.br/wp-content/uploads/2025/05/Pizza-Pesto-1-scaled.jpg'
        }}
        style={{wisth: 200,height: 200
        }}/>
        
        <Text>Open Amo Pizza</Text>

        <TextInput placeholder ="Seja-Bem Vindo ao Amo Pizza "/>

          <Button
                 title={'Faça um pedido!'}
                onPress={() => navigation.navigate('home')}
              />
       </View>
    );


    
}