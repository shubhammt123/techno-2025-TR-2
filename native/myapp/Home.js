import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [visible , setVisible] = useState(false);
  return (
    <View>
        <Button title="Open Model" onPress={()=>{setVisible(true)}} />
      {/* <Text style={styles.para}>Home</Text> */}
      <Modal visible={visible} animationType='fade' transparent={true} onRequestClose={()=>{
        setVisible(false)
      }}>
        <View style={{flex : 1 , backgroundColor : "#0000005f" }}>
            <Text>
                Modal Component
            </Text>
            <Button title='Close Model' onPress={()=>{setVisible(false)}} />
        </View>
      </Modal>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    para : {
        fontSize :  40
    }
})