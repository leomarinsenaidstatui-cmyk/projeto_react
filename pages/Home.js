import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {
  const herois = [
    { id: 1, nome: 'Homem de Ferro', imagem: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Iron+Man' },
    { id: 2, nome: 'Capitão América', imagem: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Cap' },
    { id: 3, nome: 'Thor', imagem: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Thor' },
    { id: 4, nome: 'Hulk', imagem: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Hulk' },
    { id: 5, nome: 'Viúva Negra', imagem: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Black+Widow' },
    { id: 6, nome: 'Pantera Negra', imagem: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Black+Panther' },
  ];

  const filmes = [
    { id: 1, titulo: 'Vingadores: Ultimato', ano: '2019' },
    { id: 2, titulo: 'Homem de Ferro 3', ano: '2013' },
    { id: 3, titulo: 'Capitão América: Guerra Civil', ano: '2016' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titulo}>MARVEL</Text>
        
      </View>

      {/* Banner Promocional */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>UNIVERSO MARVEL</Text>
        <Text style={styles.bannerSubText}>Explore o mundo dos heróis</Text>
      </View>

      {/* Seção Herois */}
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>HERÓIS EM DESTAQUE</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.heroisScroll}>
          {herois.map((heroi) => (
            <TouchableOpacity key={heroi.id} style={styles.cardHeroi}>
              <View style={styles.heroiImagem}>
                <Text style={styles.heroiImagemTexto}>{heroi.nome[0]}</Text>
              </View>
              <Text style={styles.heroiNome}>{heroi.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Seção Filmes */}
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>FILMES RECENTES</Text>
        {filmes.map((filme) => (
          <TouchableOpacity key={filme.id} style={styles.cardFilme}>
            <View style={styles.filmeInfo}>
              <Text style={styles.filmeTitulo}>{filme.titulo}</Text>
              <Text style={styles.filmeAno}>{filme.ano}</Text>
            </View>
            <Text style={styles.filmeSeta}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Seção Quadrinhos */}
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>QUADRINHOS</Text>
        <View style={styles.quadrinhosGrid}>
          <TouchableOpacity style={styles.cardQuadrinho}>
            <Text style={styles.quadrinhoIcon}>📚</Text>
            <Text style={styles.quadrinhoTexto}>Edição Semanal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardQuadrinho}>
            <Text style={styles.quadrinhoIcon}>📖</Text>
            <Text style={styles.quadrinhoTexto}>Clássicos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardQuadrinho}>
            <Text style={styles.quadrinhoIcon}>🦸</Text>
            <Text style={styles.quadrinhoTexto}>Origem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardQuadrinho}>
            <Text style={styles.quadrinhoIcon}>⚡</Text>
            <Text style={styles.quadrinhoTexto}>Eventos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Inferior */}
      <View style={styles.menuInferior}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🏠</Text>
          <Text style={styles.menuTexto}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🦸</Text>
          <Text style={styles.menuTexto}>Heróis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🎬</Text>
          <Text style={styles.menuTexto}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuTexto}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FF0000',
  },
  titulo: {
    fontSize: 48,
    color: '#FF0000',
    fontWeight: '900',
    letterSpacing: 3,
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitulo: {
    fontSize: 24,
    color: '#FF0000',
    fontWeight: '900',
    letterSpacing: 2,
  },
  banner: {
    backgroundColor: '#FF0000',
    margin: 20,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  bannerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bannerSubText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 10,
  },
  secao: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  secaoTitulo: {
    fontSize: 20,
    color: '#FF0000',
    fontWeight: 'bold',
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF0000',
    paddingLeft: 10,
  },
  heroisScroll: {
    flexDirection: 'row',
  },
  cardHeroi: {
    marginRight: 15,
    alignItems: 'center',
    width: 100,
  },
  heroiImagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF0000',
    marginBottom: 8,
  },
  heroiImagemTexto: {
    fontSize: 32,
    color: '#FF0000',
    fontWeight: 'bold',
  },
  heroiNome: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  cardFilme: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  filmeInfo: {
    flex: 1,
  },
  filmeTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filmeAno: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 4,
  },
  filmeSeta: {
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quadrinhosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardQuadrinho: {
    width: '48%',
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  quadrinhoIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quadrinhoTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  menuInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#1A1A1A',
    borderTopWidth: 2,
    borderTopColor: '#FF0000',
    marginTop: 20,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  menuTexto: {
    color: '#FF0000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});