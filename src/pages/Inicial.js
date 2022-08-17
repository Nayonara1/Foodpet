import { View, Button, Text } from 'react-native';


export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'   , }}>
    <Text>Bem-vindo ao FoodPet!</Text>
    
    <Text>App para alimentar seu animail.</Text>
    <Button 
      title="Principal"
      
      onPress={() => navigation.navigate('Principal')}
    />
  </View>
);



