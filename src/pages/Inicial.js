import React from 'react';
import { View, Button, Text, Image } from 'react-native';

export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'   , }}>

   <Image source={require('../../assets/Imagens/gato01.png')} style={{height:150, width: 200, borderRadius: 12}}/>
    <Text>Bem-vindo ao FoodPet!</Text>
    <Text>Um app para alimentar seu animal.</Text>
    <Button 
      title="Principal"
      onPress={() => navigation.navigate('Principal')}
    />
  </View>
);



