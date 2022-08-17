import React from 'react';
import { View, Text, TouchableOpacity,TextInput, } from 'react-native';
import Styles from './styles';



export default props => (       
<View>
    

 <Text style={Styles.text}>Login obrigatório para acessar o sistema!</Text>

 <TextInput style={Styles.input} placeholder="  Digite seu usuário"  />
 <TextInput style={Styles.input} secureTextEntry={true} placeholder="  Digite sua senha"  />

 <TouchableOpacity style={Styles.btn} >
     <Text style={Styles.textbtn} > Login </Text>
 </TouchableOpacity>
 </View>
)
