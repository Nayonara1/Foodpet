import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
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
    return(
    <View>
    <TextInput style={Styles.input} placeholder="Digite seu email" type="text" onChangeText={setEmail} value={email} />
    <TouchableOpacity style={Styles.btn} onPress={Redefinir}>
        <Text style={Styles.textbtn}>Enviar</Text>
      </TouchableOpacity>
    </View>
    )
}

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
