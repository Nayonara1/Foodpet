import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "../config/firebase";


export default function RedefinirSenha({ navigation }) {
  const [email, setEmail] = useState("");

  const Redefinir = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Verifique seu email")
        navigation.navigate("Inicial")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Identifique-se para receber um e-mail com as instruções e o link para criar uma nova senha.</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" type="text" onChangeText={setEmail} value={email} />
      <TouchableOpacity style={styles.btn} onPress={Redefinir}>
        <Text style={styles.textbtn}>Redefinir senha </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 10,
    padding: 10,
    width: 320,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#FA6252',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 12
  },
  input: {
    marginBottom: 30,
    padding: 10,
    width: 320,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 12
  },
  textbtn: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 10,
    fontWeight: "bold",
    margin: 20,
    marginBottom: 90
  },

});
