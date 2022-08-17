import React from 'react';
import { View, Button, Text, Image,StyleSheet } from 'react-native';
//import Alogin2 from '../../components/Alogin2';

export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

    <View style={styles.img}>
    <Image source={require('../../assets/Imagens/gato01.png')} style={{height:160, width: 200, borderRadius: 12}}/>
    </View>
  
    <Text>Bem-vindo ao FoodPet!</Text>
    <Text>Um app para alimentar seu animal.</Text>
    <Button 
      title="Principal"
      onPress={() => navigation.navigate('Principal')}
    />
   
      </View>
);
const styles = StyleSheet.create({
  img: {
    
    height:250,
     width: 250,
      borderRadius: 250,
       backgroundColor: '#fff',
       justifyContent: 'center', 
        alignItems:'center' 
  },

});


