import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const  [productData , setProductData] = useState([]);
    const fetchData = async ()=>{
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();  
            setProductData(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <View>
        <ScrollView>
          <View style={{flexDirection : "row" , flexWrap : "wrap" , gap : 20 , justifyContent : "center" , alignItems :    "center"}}>
            {/* {
        productData.map((item)=>{
            return(
               <View key={item.id} style={{backgroundColor : "#e7e7e7ff" , padding : "20" , borderRadius : 10 , elevation : 5 , gap : 10}}>
                <Image source={{uri : item.image}} style={{width : 240 , height : 300}} />
                <Text style={{fontSize : 30 , textAlign : "center"}}>Rs.{item.price}</Text>
               </View>
            )
            
        })
     } */}

     <FlatList
     data={productData}
     renderItem={(item)=>{
        return (
            <View key={item.id} style={{backgroundColor : "#e7e7e7ff" , padding : "20" , borderRadius : 10 , elevation : 5 , margin : 20}}>
                <Image source={{uri : item.item.image}} style={{width : 240 , height : 300}} />
                <Text style={{fontSize : 30 , textAlign : "center"}}>Rs.{item.item.price}</Text>
               </View>
        )
     }}

     keyExtractor={item => item.id}
     numColumns={2}
      />

            </View>  
        
     
     </ScrollView>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})