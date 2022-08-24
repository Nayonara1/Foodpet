import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { collection, getDocs } from "firebase/firestore";
import firebase from "../config/firebase";


export default () => {
    const database = firebase.firestore();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [nomePet, SetNomepet] = useState("");

    async function cadastro() {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(database => {
                const uid = database.user.uid;
                const users = firebase.firestore().collection('users');
                users.doc(uid).set({
                    name: nome, email: email, nomePet: nomePet
                });
            });
        navigation.navigate("Principal")
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preciso de alguns dados para começar.</Text>
            <TextInput style={styles.input} placeholder="Seu nome" type="text" onChangeText={setNome} value={nome}/>
            <TextInput style={styles.input} placeholder="Senha" type="text" onChangeText={setSenha} value={senha} />
            <TextInput style={styles.input} placeholder="Email" type="text" onChangeText={setEmail} value={email}/>
            <TextInput style={styles.input} placeholder="Nome do seu pet" type="text" onChangeText={SetNomepet} value={nomePet}/>

            <TouchableOpacity style={styles.buttonRegister} onPress={cadastro}>
                <Text style={styles.textButtonRegister}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#EEE9E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        color: "#000000",
        marginBottom: 70,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
        textAlign: "center"
    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FA6252",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister: {
        color: "#000000",
        fontSize: 18,
        fontWeight: 'bold',
    },


});
