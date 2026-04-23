import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [datanascimento, setDatanascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");

  function formatApi(data) {
    if (!data || !data.includes("/")) {
      return null;
    }

    const [dia, mes, ano] = data.split("/");
    if (!dia || !mes || !ano) {
      return null;
    }

    return `${ano}-${mes}-${dia}`;
  }

  async function Cadastrar() {
    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
      Alert.alert("ERRO", "Favor preencher todos os campos");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("ERRO", "As senhas nao coincidem");
      return;
    }

    if (datanascimento !== "" && !formatApi(datanascimento)) {
      Alert.alert("ERRO", "Informe a data no formato DD/MM/AAAA");
      return;
    }

    const values = {
      nome,
      email,
      senha,
      confirmarSenha,
      datanascimento: formatApi(datanascimento),
      genero,
      telefone,
    };

    try {
      const response = await axios.post('http://10.122.41.159:8000/cadastro_usuario', values);
      console.log(response.data);

      Alert.alert("Sucesso!", "Usuario cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.log("ERRO", error.response?.data?.errors || error.message);
      Alert.alert("ERRO", "Falha no cadastro. Verifique os dados.");
    }
  }

  function irParaLogin() {
    navigation.navigate("Login");
  }

  const [fonts] = useFonts({
    marvel: require('../assets/fontes/marvel.ttf')
  });

  if (!fonts) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CRIAR CONTA</Text>

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

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (DD/MM/AAAA)"
        placeholderTextColor="#999"
        value={datanascimento}
        onChangeText={setDatanascimento}
      />

      <TextInput
        style={styles.input}
        placeholder="Genero"
        placeholderTextColor="#999"
        value={genero}
        onChangeText={setGenero}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#999"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TouchableOpacity style={styles.button} onPress={Cadastrar}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={irParaLogin}>
        <Text style={styles.linkText}>Ja tem uma conta? Faca login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#000000',
  },
  titulo: {
    fontSize: 36,
    color: "#0059FF",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 5,
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 174, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitulo: {
    fontSize: 42,
    color: "#0059FF",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 40,
    letterSpacing: 4,
    textShadowColor: 'rgba(0, 174, 255, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#0059FF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#333333',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#0059FF',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#0059FF',
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
    color: '#0059FF',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
