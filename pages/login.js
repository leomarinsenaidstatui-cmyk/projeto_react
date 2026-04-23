import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

export default function Login({ navigation }){
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function Logar() {
    console.log("Botao login pressionado");

    if(email === "" || pass === ""){
      Alert.alert("ERRO", "Favor preencher todos os campos!");
      return;
    }

    try {
      const response = await axios.post("http://10.122.41.159:8000/api/login_novo", {
        email: email,
        senha: pass,
      });

      console.log(response.data);

      if(response.data.token){
        await AsyncStorage.setItem('token', response.data.token);
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("Cep");
      } else {
        Alert.alert("ERRO", response.data.msg || "Nao foi possivel fazer login.");
      }
    } catch (error) {
      console.log("ERRO", error.response?.data || error.message);
      Alert.alert(
        "ERRO",
        error.response?.data?.msg ||
        error.response?.data?.message ||
        "Falha na conexao com o servidor"
      );
    }
  }

  const [fonts] = useFonts({
    'marvel': require('../assets/fontes/marvel.ttf')
  });

  if(!fonts){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#666"
        secureTextEntry={true}
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={Logar}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#000000',
  },
  titulo: {
    fontSize: 52,
    color: "#0059ff",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 15,
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 174, 255, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#0059FF',
    borderRadius: 8,
    padding: 18,
    marginBottom: 20,
    fontSize: 20,
    backgroundColor: '#1a1a1a',
    color: '#FFFFFF',
  },
  loginBtn: {
    backgroundColor: '#0059FF',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
