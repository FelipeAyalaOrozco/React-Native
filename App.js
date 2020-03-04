import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './Components/details';
import HomeScreen from './Components/card'

function TitleHome() {
  return (
    <View>
    <Text style={styles.titleText}>365 Restaurant</Text>
    <Text style={styles.subtitleText}>Menus</Text>  
    </View>
  );
}
function TitleDetails() {
  return (
    <View>
    <Text style={styles.titleText}>Details</Text>  
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ headerTitle: props => <TitleHome {...props} />,
        headerStyle: {backgroundColor: 'red'},
        headerTitleAlign: 'center',
        headerRight: () => (<Image source={require('./assets/cart.png')} style={{width:35, height:35, margin:40}}></Image>),
        }}
        />
        <Stack.Screen name="Details" component={DetailsScreen}  
         options={{ headerTitle: props => <TitleDetails {...props} />,
         headerStyle: {backgroundColor: 'red'},
         headerTitleAlign: 'center',
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})

export default App;
