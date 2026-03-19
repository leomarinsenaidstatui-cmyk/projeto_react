import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font'; 

export default function Login({ navigation }){



  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function logar(){
    if(user === "" || pass === ""){
      Alert.alert("ERRO", "Favor Preencher todos os campos");
    } else if(user === "Victor" && pass === "123"){
      Alert.alert("Sucesso!", "Usuário Logado com Sucesso!");
      navigation.navigate("Home");
    } else{
      Alert.alert("ERRO!", "Usuário não Cadastrado!");
    }
  }
  
  const [fonts] = useFonts({ 
        'marvel': require('../assets/fontes/marvel.ttf')  
  })

  if(!fonts){
      return null;
  }
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>LOGIN</Text>
      
      <Text style={styles.subtitulo}>MARVEL</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
        value={user}
        onChangeText={setUser}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={pass}
        onChangeText={setPass}
      />
      
      <TouchableOpacity style={styles.loginBtn} onPress={logar}>
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
    color: "#FF0000",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 15,
    letterSpacing: 3,
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitulo: {
    fontSize: 48,
    color: "#FF0000",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 60,
    letterSpacing: 4,
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF0000',
    borderRadius: 8,
    padding: 18,
    marginBottom: 20,
    fontSize: 20,
    backgroundColor: '#333333',
    color: '#FFFFFF',
  },
  loginBtn: {
    backgroundColor: '#FF0000',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
  },
});