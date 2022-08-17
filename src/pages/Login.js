import React from 'react';
import {useState} from 'react';
import firebase from 'firebase';
import {View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, ImageBackground} from 'react-native'

export default function Login({navigation}){

}
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errorLogin, setErrorLogin] = useState("");
        const loginFirebase = ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Home", {idUser: user.uid})
        })
        .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
        });
}
