import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Card, Avatar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/foto_Perfil.png')} style={{ width: 50, height: 50 }} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Musfirah</Text>
          <Text style={styles.role}>Administrator</Text>
        </View>
        <Icon name="bell" size={25} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search..." />
        <Icon name="sliders" size={25} color="#fff" style={styles.filterIcon} />
      </View>

      {/* Stock Management Card */}
      <Card style={styles.stockCard}>
        <Text style={styles.stockTitle}>Manage</Text>
        <Text style={styles.stockSubtitle}>Stock</Text>
        <Button mode="contained"  onPress={() => console.log('Access Stock')} style={styles.accessButton} labelStyle={styles.accessButtonText} >Access</Button>
        <Image source={require('../../assets/acai.png')} style={styles.stockImage} />
      </Card>

      {/* Statistics */}
      <View style={styles.statsSection}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>920</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>52</Text>
          <Text style={styles.statLabel}>Vendors</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>R$9mil</Text>
          <Text style={styles.statLabel}>Stocks</Text>
        </View>
      </View>

      {/* Recent Posts */}
      <View style={styles.recentPosts}>
        <Text style={styles.recentPostsTitle}>Recent Posts</Text>
        <View style={styles.post}>
          <Avatar.Image size={50} source={require('../../assets/image 38.png')} />
          <View style={styles.postText}>
            <Text style={styles.postTitle}>Ciclano</Text>
            <Text style={styles.postTime}>1hr ago</Text>
          </View>
        </View>
        <View style={styles.post}>
          <Avatar.Image size={50} source={require('../../assets/image 42.png')} />
          <View style={styles.postText}>
            <Text style={styles.postTitle}>Beltrano</Text>
            <Text style={styles.postTime}>3hr ago</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    backgroundColor: '#f0f8ff',
  },
  contentContainer: {
    padding: 10, 
    flexGrow: 1,
    marginBottom:10,
  },
  header: {
    flexDirection: 'row',
    paddingVertical:10,
    marginTop:30,
    marginBottom:0,
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    color: 'gray',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterIcon: {
    backgroundColor: '#8e44ad',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  stockCard: {
    backgroundColor:'#B66DFF',
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
  },
  stockTitle: {
    color: '#fff',
    fontSize: 16,
  },
  stockSubtitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stockImage: {
    width: 150,
    height: 100,
    position: 'absolute',
    top: 3,
    right: 10,
  },

  accessButton: {
    backgroundColor: '#8a19d6',
    paddingVertical: 2,
    paddingHorizontal: 35,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  accessButtonText: {
    color: '#fff', 
    fontSize:  0.04,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  statCard: {
    backgroundColor: '#8e44ad',
    padding: 20,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
  },
  recentPosts: {
    marginTop: 20,
  },
  recentPostsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  postText: {
    marginLeft: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    color: 'gray',
  },
});

export default Home;

