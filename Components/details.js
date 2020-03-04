import React from 'react';
import { View, Text,Image,Button,StyleSheet,FlatList, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Details({route,navigation}) {
    const title=route.params.title;
    const description=route.params.description;
    const precio=route.params.precio;
    const image=route.params.image;
    const imageFood=route.params.imageFood;
  
    return (
        <ImageBackground style={{width:'100%',height:'100%',}} source={require('../assets/pizza.jpg')}>
           <TouchableOpacity>
           <View  style={{backgroundColor: 'rgba(52, 52, 52, 0.5)'}}>
              <Text style={style.title}>{title}</Text>

              
              <Text style={style.description}>{description}</Text>

              <Image  style={style.imageFood} source={{uri:imageFood}}></Image>
              <Button title="Buy" color="red"  onPress={() => navigation.navigate('Home')}/>

              <Text style={style.precio}>Precio: {precio}</Text></View>
             
          </TouchableOpacity>
        </ImageBackground>
         
       
 
    );
  }

  const style=StyleSheet.create({
    title:{
      textAlign:'center',
      fontSize: 50,
      fontWeight: 'bold',
      color:"red",

    },
    description:{
      color:'white',
      fontSize:30,
      textAlign:'justify',
      margin:10
    },
    precio:{
        color:'white',
      fontSize:30,
      margin:10,
      textAlign:'right'
    },
    imageFood:{
      width:'92%',
      height:250,
      margin:14
    }
  })


  export default Details;