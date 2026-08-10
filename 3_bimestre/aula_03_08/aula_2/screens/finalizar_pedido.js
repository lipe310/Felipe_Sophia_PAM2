import { View, Text, TextInput, Button, Image } from 'react-native';

export default function finalizar_pedido({ navigation }) {

    return (
    
    <View>

        <Image
        source={{
            uri: 'https://img.magnific.com/fotos-gratis/motorista-bonito-e-estupido-em-uma-scooter-com-capacete-vermelho-entregando-pizza_273609-31430.jpg'
        }}
        style={{wisth: 200,height: 200
        }}/>
        
        <Text>Obrigado pelo seu pedido</Text>


       </View>
    );

}