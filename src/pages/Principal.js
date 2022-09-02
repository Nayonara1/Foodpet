import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useBackHandler } from '@react-native-community/hooks';
import DateTimePicker from '@react-native-community/datetimepicker';
import { collection, getDocs } from "firebase/firestore";
import Paho from "paho-mqtt"
import firebase from "../config/firebase";
import Constants from 'expo-constants';

export default ({ navigation }) => {
    var clientID = "ID-" + Math.round(Math.random() * 1000);
    const client = new Paho.Client(
        'broker.emqx.io',
        8083,
        clientID

    )
    // 'broker.emqx.io',
    // 8083,
    // // '10.44.1.35',
    // // 9001,
    // '/'
    // // clientID
    client.connect({
        onSuccess: function () {
            console.log("connected")
            // console.log(clientID)
            // client.subscribe("esp32/output")
            // client.subscribe("esp32/distance")
            client.subscribe("alimentador"); // As linhas a seguir sao uma tentativa de envio de mensagem
        },
        onFailure: function () {
            console.log("Desconectado")
        },
        // userName: 'emqx',
        // password: 'public',
        // useSSL: true,
    })
    const database = firebase.firestore();
    function sair() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Inicial")
        }).catch((error) => {

        });
    }

    function ligar() {
        const message1 = new Paho.Message("on"); // AGORA funcionando
        message1.destinationName = "alimentador"; // para testar

        client.send(message1); // abrir o broker online
    }

    function desligar() {
        const message1 = new Paho.Message("off"); // AGORA funcionando
        message1.destinationName = "alimentador"; // para testar

        client.send(message1); // abrir o broker online
    }
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Alimente seu pet sem stress!</Text>
            <TouchableOpacity onPress={ligar} style={styles.btnLigar}>
                <Text>LIGAR</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={desligar} style={styles.bntDesligar}>
                <Text>DESLIGAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bntInicial} onPress={() => { sair() }}>
                <Text style={styles.iconBntInicialt}>
                    Sair
                </Text>
                <MaterialCommunityIcons name="location-exit" size={25} color="#FA6252" />


            </TouchableOpacity>
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: '#EEE9E9',
        alignItems: 'center'
    },
    paragraph: {
        margin: 20,
        fontSize: 19,
        fontWeight: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    bntDesligar: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FA6252",
        borderRadius: 50,
        marginTop: 30,
    },
    btnLigar: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FA6252",
        borderRadius: 50,
        marginTop: 30,
    },
    bntInicial: {
        width: 60,
        height: 30,
        position: "absolute",
        bottom: 30,
        right: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8,
    },
    iconButtonLogout: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        right: 40,
    }

});