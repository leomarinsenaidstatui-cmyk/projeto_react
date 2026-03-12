import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

export default function CadastroHeroi() {
  const [nome, setNome] = useState('');
  const [codinome, setCodinome] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [aparicao, setAparicao] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro aqui
    console.log({
      nome,
      codinome,
      habilidade,
      aparicao,
      senha,
      email
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        <Text style={styles.titulo}>CADASTRAR</Text>
        <Text style={styles.subtitulo}>HERÓI</Text>

        {/* Linha 1: Nome e Codinome */}
        <View style={styles.linha}>
          <View style={styles.coluna}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={[styles.input, styles.inputMetade]}
              placeholder="Digite o nome"
              placeholderTextColor="#666"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          
          <View style={styles.coluna}>
            <Text style={styles.label}>Codinome</Text>
            <TextInput
              style={[styles.input, styles.inputMetade]}
              placeholder="Digite o codinome"
              placeholderTextColor="#666"
              value={codinome}
              onChangeText={setCodinome}
            />
          </View>
        </View>

        {/* Linha 2: Habilidade e Aparição */}
        <View style={styles.linha}>
          <View style={styles.coluna}>
            <Text style={styles.label}>Habilidade</Text>
            <TextInput
              style={[styles.input, styles.inputMetade]}
              placeholder="Digite a habilidade"
              placeholderTextColor="#666"
              value={habilidade}
              onChangeText={setHabilidade}
            />
          </View>
          
          <View style={styles.coluna}>
            <Text style={styles.label}>Aparição</Text>
            <TextInput
              style={[styles.input, styles.inputMetade]}
              placeholder="Ano da 1ª aparição"
              placeholderTextColor="#666"
              value={aparicao}
              onChangeText={setAparicao}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Linha 3: Senha e Email */}
        <View style={styles.linha}>
          <View style={styles.coluna}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={[styles.input, styles.inputMetade]}
              placeholder="Digite a senha"
              placeholderTextColor="#666"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
          </View>
          
          <View style={styles.coluna}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, styles.inputMetade]}
              placeholder="Digite o email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {/* Botão ENTRAR */}
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        {/* Link para login existente */}
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Já tem cadastro? Faça login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#000000',
  },
  titulo: {
    fontSize: 48,
    color: "#FF0000",
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 5,
    letterSpacing: 3,
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  coluna: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF0000',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#333333',
    color: '#FFFFFF',
  },
  inputMetade: {
    width: '100%',
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 2,
  },
  linkContainer: {
    alignItems: 'center',
    padding: 10,
  },
  linkText: {
    color: '#FF0000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});