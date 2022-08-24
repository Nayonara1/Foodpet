import react from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import firebase from "../../config/firebaseConfig";



export default () => {
    async function register() {
        const database = firebase.firestore()
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const [nome, setNome] = useState("");
        const [telefone, setTelefone] = useState("");
        const [porta, setPorta] = useState("");

        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(database => {
                const uid = database.user.uid;
                const users = firebase.firestore().collection('users');
                users.doc(uid).set({
                    name: nome, telefone: telefone, porta: porta, email: email
                });
            });
        navigation.navigate("Task")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preciso de alguns dados para começar.</Text>
            <TextInput style={styles.input} placeholder="Seu nome" />
            <TextInput style={styles.input} placeholder="Nome do seu pet" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" />
           

            <TouchableOpacity style={styles.buttonRegister}>
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
