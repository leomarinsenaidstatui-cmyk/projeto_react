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
      navigation.navigate("Cep");
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
      
    
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#666"
        value={user}
        onChangeText={setUser}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#666"
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
    color: "#0059ff",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 15,
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 174, 255, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitulo: {
    fontSize: 48,
    color: "#0059FF",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 60,
    letterSpacing: 4,
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