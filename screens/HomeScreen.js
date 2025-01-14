  import React from 'react';
  import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chọn kiểu hiển thị:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FlatList')}
        >
          <Text style={styles.buttonText}>Danh sách FlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SectionList')}
        >
          <Text style={styles.buttonText}>Danh sách SectionList</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 12,
      marginVertical: 8,
      borderRadius: 8,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

  export default HomeScreen;
