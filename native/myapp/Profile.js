import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    console.log("Profile Component")
    const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button title='Contact' onPress={()=>{
        navigation.navigate("contact")
      }} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})