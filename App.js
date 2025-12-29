import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import {useState, useEffect} from "react";
import Producto from './components/Producto';
import Constants from 'expo-constants';
import { getLatestProduct } from './lib/PlatziFakeApi';

export default function App() {
  const [productos, setProductos]=useState([]);
  useEffect(()=>{
    getLatestProduct().then(pelis=>setProductos(pelis));
  },[])
  return (
    <ScrollView>

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style >
        {
          productos.map(producto=>{
            return <Producto key={producto.id} producto={producto} />
          })
        }
      </View>
    </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 8,
  },
});
