import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    
    <ScrollView>
    <View style={styles.container}>
      <Text>Open Bom dia amiguinho!</Text>
      <StatusBar style="auto" />
      <TextInput>
        defaultValue="Como vai amiguinho?"
      </TextInput>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>E a família como vai?</Text>

      <Button
        onPress={() => {}}
        title={''}
      />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9bd5f7c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
