import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Vector from "./assets/icon.png";

export default function App() {
  const [count ,  setCount] = useState(0);
  return (
    <>
    <View style={styles.container}>
      <Pressable onPress={()=>{console.log("Card Clicked")}} onLongPress={()=>{
        console.log("Long press event called");
      }}>
        <View style={styles.card}>
        <Image source={{uri : "https://tse2.mm.bing.net/th/id/OIP.29GW-JI1dW2mvtNrl0S1CwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3"}} style={styles.image} />
        <Text style={styles.para}>
          Canon 1200D
        </Text>
      </View>
      </Pressable>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // width : 300,
    // height : 300,
    // backgroundColor  : "skyblue",
    // margin : 30,
    // padding  : 20,
    // borderWidth : 10,
    // borderColor : "orange",
    // borderRadius : 20,
    // shadowOffset : {
    //   width : 20,
    //   height : 20
    // },
    // shadowColor : "red",
    // elevation : 20
    padding : 50,
    alignItems : "center",
    flex : 1,
  },
  para :  {
    fontSize : 40,
    marginTop : 20,
    textAlign : "center"
  },
  card : {
    backgroundColor : "lightyellow",
    padding : 30,
    borderRadius : 20,
    elevation : 10
  },
  image : {
    width : 500,
    height : 300
  }
});
