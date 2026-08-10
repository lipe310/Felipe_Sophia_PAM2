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

        <TextInput placeholder ="Escolha sua pizza"/>

          <Button
                 title={'Pizza de Queijo'}
                onPress={() => navigation.navigate('finalizar_pedido')}
              />

            <Button
                 title={'Pizza de Marguerita'}
                onPress={() => navigation.navigate('finalizar_pedido')}
              />   

            <Button
                 title={'Pizza de Calabresa'}
                onPress={() => navigation.navigate('finalizar_pedido')}
              />
       </View>
    );


    
}