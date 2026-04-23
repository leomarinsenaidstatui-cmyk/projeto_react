import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font'; 
import axios from 'axios';

export default function Cep({ navigation }){
  

  const[cep, setCep] = useState("18276470");
  const[endereco, setEndereco] = useState("")
  const[bairro, setBairro] = useState("")
  const[cidade, setCidade] = useState("")
  const[estado, setEstado] = useState("")
  
  
  const [fonts] = useFonts({ 
        'marvel': require('../assets/fontes/marvel.ttf')  
  })

  if(!fonts){
      return null;
      
  }
  



  async function Buscar(){

    
    const response = await axios.get(`http://10.122.41.159:9000/consulta_cep/${cep}`);
    console.log(response.data);
    

    setEndereco(response.data.logradouro);
    setBairro(response.data.bairro);
    setCidade(response.data.localidade);
    setEstado(response.data.uf);

  }


  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>BUSCA CEP</Text>
      
    
      
    
      <TextInput
        style={styles.input}
        placeholder="Cep"
        placeholderTextColor="#999"
        value={cep}
        onChangeText={setCep}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        placeholderTextColor="#999"
        value={endereco}
        onChangeText={setEndereco}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        placeholderTextColor="#999"
        value={bairro}
        onChangeText={setBairro}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        placeholderTextColor="#999"
        value={cidade}
        onChangeText={setCidade}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Estado"
        placeholderTextColor="#999"
        value={estado}
        onChangeText={setEstado}
      />
      
      <TouchableOpacity style={styles.button} onPress={Buscar}>
        <Text style={styles.buttonText}>Buscar</Text>
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
    color: "#0059ff",
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
    color: "#0059ff",
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
    borderColor: '#0059ff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#333333',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#0059ff',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#0059ff',
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
    color: '#0059ff',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});