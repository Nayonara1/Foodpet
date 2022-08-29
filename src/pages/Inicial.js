import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import Alogin2 from '../../components/Alogin2';
import Styles from '../components/Alogin2/styles';
import firebase from "../config/firebase"
import "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth"

export default ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        navigation.navigate('Principal')

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);

      });
  }
  return (



    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

      <View style={styles.img}>
        <Image source={require('../../assets/Imagens/gato01.png')} style={{ height: 160, width: 200, borderRadius: 12 }} />
      </View>
      <Text style={Styles.text}>Bem-vindo ao FoodPet!</Text>

      <TextInput style={Styles.input} placeholder="  Digite seu usuário" type="text" onChangeText={setEmail} value={email} />
      <TextInput style={Styles.input} secureTextEntry={true} placeholder="  Digite sua senha" type="text" onChangeText={setSenha} value={senha} />
      <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>

      </TouchableOpacity>
      <TouchableOpacity style={Styles.btn} onPress={login}>
        <Text style={Styles.textbtn} > Entrar </Text>
      </TouchableOpacity>

      <Text style={Styles.registration}>
        Não está cadastrado ?
        <Text style={Styles.linkSubscribe} onPress={() => navigation.navigate("Cadastro")}>
          Cadastre-se agora
        </Text>
      </Text>
      <Text style={Styles.registration}>
        Redefinir?
        <TouchableOpacity onPress={() => navigation.navigate("Redefinir")}>
          <Text style={Styles.linkSubscribe} >
            Redefinir senha
          </Text>
        </TouchableOpacity>
      </Text>


    </View>
  )
};
const styles = StyleSheet.create({
  img: {

    height: 250,
    width: 250,
    borderRadius: 250,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

});


