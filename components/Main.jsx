import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { getLatestProduct } from "../lib/PlatziFakeApi";
import Producto from "../components/Producto";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const [productos, setProductos] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestProduct().then((products) => setProductos(products));
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View>
        {productos.length === 0 ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={productos}
            keyExtractor={(p) => p.id}
            renderItem={({ item }) => <Producto producto={item} />}
          />
        )}
      </View>
    </View>
  );
}
