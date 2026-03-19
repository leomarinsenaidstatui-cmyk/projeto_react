import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font'; 

export default function Cadastro({ navigation }){
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function cadastrar(){
    if(nome === "" || email === "" || senha === "" || confirmarSenha === ""){
      Alert.alert("ERRO", "Favor Preencher todos os campos");
    } else if(senha !== confirmarSenha){
      Alert.alert("ERRO", "As senhas não coincidem");
    } else {
      Alert.alert("Sucesso!", "Cadastro realizado com Sucesso!");
      navigation.navigate("Login");
    }
  }

  function irParaLogin(){
    navigation.navigate("Login");
  }
  
  const [fonts] = useFonts({ 
        'marvel': require('../assets/fontes/marvel.ttf')  
  })

  if(!fonts){
      return null;
  }
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>CRIAR CONTA</Text>
      
      <Text style={styles.subtitulo}>MARVEL</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      
      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.linkButton} onPress={irParaLogin}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
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
    fontSize: 36,
    color: "#FF0000",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 5,
    letterSpacing: 2,
    textShadowColor: 'rgba(255, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitulo: {
    fontSize: 42,
    color: "#FF0000",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 40,
    letterSpacing: 4,
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF0000',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#333333',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});