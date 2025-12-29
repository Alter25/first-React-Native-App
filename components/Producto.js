import { View, Text, Image, StyleSheet } from "react-native";

export default function Producto({producto}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{producto.title}</Text>
      <Image source={{uri:producto.imageUrl}} style={styles.image} />
      <Text>{`$${producto.price}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth:'80%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:8,
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:8,
  },
  image:{
    height:100,
    width:100,
    alignSelf:'center',
    marginTop:8,
  }
});