import { View, Button, Text } from 'react-native';


export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'   , backgroundColor: 'pink'}}>
    <Text>Bem-vindo ao foodpet</Text>
    <Button 
      title="Principal"
      
      onPress={() => navigation.navigate('Principal')}
    />
  </View>
);



