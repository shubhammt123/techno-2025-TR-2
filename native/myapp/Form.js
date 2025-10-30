import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Form = () => {
    const [formData , setFormData]  = useState({});

    const onChange = (name , value)=>{
        setFormData({...formData  ,[name] : value})
    }

    console.log(formData)
  return (
    <View>
        
      <Text style={{fontSize : 40 , textAlign : "center"  , marginBottom : 20}}>Login Form</Text>
      <TextInput placeholder='Email' style={{borderWidth : 1 , padding : 10 , fontSize : 25 , margin : 20}} onChangeText={(text)=>{
        onChange("email" , text);
      }} />
      <TextInput placeholder='Password' style={{borderWidth : 1 , padding : 10 , fontSize : 25 , margin : 20}} onChangeText={(text)=>{
        onChange("password" , text)
      }} secureTextEntry={true} />
      <View style={{margin : 20}}>
        <Button title='Login' onPress={()=>{console.log(formData)}} />
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})