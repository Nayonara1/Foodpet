import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contato from '../pages/Contato'
import Index from '../pages/Index'
import Sobre from '../pages/Sobre'

const Stack = createNativeStackNavigator()

export default () => {
    return(
        <Stack.Navigator initialRouteName='Index'>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Contato" component={Contato} />
            <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
    )
}