import { Alert, Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [visible , setVisible] = useState(false);
    const showAlert = ()=>{
        Alert.alert(
            "Hello",
            "This is the demo message",
            [
                {
                text : "ok" ,
                onPress : ()=>{
                    console.log("Ok button pressed")
                }
            },
            {
                text : "cancel",
                onPress : ()=>{
                    console.log("Cancel pressed")
                }
            }
        ]
        )
    }
  return (
    <View>
        {/* <Button title="Open Model" onPress={()=>{setVisible(true)}} />
      <Text style={styles.para}>Home</Text>
      <Modal visible={visible} animationType='fade' transparent={true} onRequestClose={()=>{
        setVisible(false)
      }}>
        <View style={{flex : 1 , backgroundColor : "#0000005f" }}>
            <Text>
                Modal Component
            </Text>
            <Button title='Close Model' onPress={()=>{setVisible(false)}} />
        </View>
      </Modal> */}
      <Button title="Open Alert" onPress={showAlert} />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    para : {
        fontSize :  40
    }
})