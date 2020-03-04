import React from 'react';
import {  Text,Image,StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

function Card({navigation}) {
    return (
        <ImageBackground style={{width:'100%',height:'100%',}} source={require('../assets/pizza.jpg')}>
        <ScrollView>
          <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',
          {title:"Chicken",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt. ",
          imageFood:"https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/4734/thumb/r_4734_1550829145.jpg",
          precio:"$100.00"})}>
              <Text style={style.cardText}>Chicken</Text>
              <Image style={style.cardImage}  source={require('../assets/chicken.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',{
          title:"Pizza",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt. ",
          imageFood:"https://images.squarespace-cdn.com/content/v1/5c54b9347a1fbd277f85fbe6/1549079845173-4ON76ETE3HML6RL4M7FU/ke17ZwdGBToddI8pDm48kJ0lej6MlCqKAUx1EqBpSQQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsCUlr2_RWyHhBmLwvddopt0kox41Ncyh6WdZCVnnhw9FspE4q2BscMKK5-NBcyqH/pizza.jpg?format=2500w",
          precio:"$100.00"})}>
              <Text style={style.cardText}>Pizza</Text>
              <Image style={style.cardImage}  source={require('../assets/pizza.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',{title:"Thai",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt. ",
          imageFood:"https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2016/02/Thai-coconut-rice-recipe.jpg",
          precio:"$100.00"})}>
              <Text style={style.cardText}>Thai</Text>
              <Image style={style.cardImage}  source={require('../assets/thai.jpg')}/>
          </TouchableOpacity>
          </ScrollView>
      </ImageBackground>

      
        
     
    );
  }

const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:5,
        marginLeft:10,
        borderRadius:5
    },  
    cardImage:{
        width:'95%',
        height:190,
        margin:8,
        borderRadius:5
    },
    cardText:{
        color:"red",
        marginTop:5,
        marginLeft:20,
        fontSize:23,
        fontWeight:"bold"
    }


})


  export default Card;