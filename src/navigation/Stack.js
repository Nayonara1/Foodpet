import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicial from '../pages/Inicial'

const Stack = createNativeStackNavigator()

export default () => {
    return(
        <Stack.Navigator initialRouteName='Inicial'>
            <Stack.Screen name="Inicial" component={Inicial} />

        </Stack.Navigator>
    )
}