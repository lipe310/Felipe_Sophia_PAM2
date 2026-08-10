import { View, Text, TextInput, Button, Image } from 'react-native';

export default function pizzas({ navigation }) {

    return (
    
    <View>
        
        <Text>Amo Pizza</Text>

        <TextInput placeholder ="Escolha sua pizza"/>
     
     <Image
        source={{
            uri: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d036cd01122da62bf581784f52d99b3a.jpg'
        }}
        style={{wisth: 100,height: 150
        }}/>

          <Button
                 title={'Pizza de Queijo'}
                onPress={() => navigation.navigate('finalizar_pedido')}
              />

      <Image
        source={{
            uri: 'https://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167.jpg'
        }}
        style={{wisth: 100,height: 150
        }}/>
      

            <Button
                 title={'Pizza de Marguerita'}
                onPress={() => navigation.navigate('finalizar_pedido')}
              />   

      <Image
        source={{
            uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg'
        }}
        style={{wisth: 100,height: 150
        }}/>

            <Button
                 title={'Pizza de Calabresa'}
                onPress={() => navigation.navigate('finalizar_pedido')}
              />
       </View>
    );


    
}