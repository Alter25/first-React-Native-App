import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start</Text>
      <Text>Some other stuff</Text>
      <Button title="Pulsa aqui"/>
      <Pressable underlayColor={"#09f"}
      onPress={()=>{}} 
      style={({pressed})=>[
        {backgroundColor:pressed?"rgb(210,230,255)":"white"},
        styles.wrapperCustom,
      ]}>
        {({pressed})=>(
          <Text style={{
            fontSize:pressed?32:16,
          }}>{pressed?"Presionado":"No presionado"}</Text>
        )}
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
