import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    
    <ScrollView>
    <View style={styles.container}>
      <Text>Open Amo Pizza</Text>
      <StatusBar style="auto" />
      <TextInput>
        defaultValue="Seja-Bem Vindo ao Amo Pizza "
      </TextInput>

      <Image
        source={{
          uri: 'https://www.aquariuscuritiba.com.br/wp-content/uploads/2025/05/Pizza-Pesto-1-scaled.jpg',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>E a família como vai?</Text>

      <Button
        onPress={() => {}}
        title={'Faça um pedido!'}
      />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7d79bc2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
