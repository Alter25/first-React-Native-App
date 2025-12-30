import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";
import { getLatestProduct } from "../lib/PlatziFakeApi";
import Producto from "../components/Producto";
import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const [productos, setProductos] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestProduct().then((pelis) => setProductos(pelis));
  }, []);

  return (
    <View>
      <ScrollView>
        <StatusBar style="auto" />
        <View>
          {productos.map((producto) => {
            return <Producto key={producto.id} producto={producto} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 8,
  },
});
