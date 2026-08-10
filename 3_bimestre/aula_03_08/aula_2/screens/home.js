import { View, Text, TextInput, Button, Image } from 'react-native';

export default function home({ navigation }) {

    return (
    
    <View>

      <Text>Amo Pizza</Text>

        <Image
        source={{
            uri: 'https://img.magnific.com/fotos-gratis/foto-de-mulher-satisfeita-segura-um-pedaco-de-pizza-sente-se-satisfeita-por-passar-o-tempo-livre-com-os-amigos-na-pizzaria-parece-feliz-e-diretamente-usa-roupa-casual-isolada-sobre-a-parede-amarela-almoco_273609-29200.jpg?semt=ais_hybrid&w=740&q=80'
        }}
        style={{wisth: 200,height: 200
        }}/>

        <TextInput placeholder ="Escolha sua pizza"/>

          <Button
                 title={'Peça sua pizza pelo App ou site'}
                onPress={() => navigation.navigate('pizzas')}
              />

       </View>
    );


    
}