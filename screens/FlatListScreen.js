import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const FlatListScreen = () => {
  const products = [
    { id: '1', name: 'Product A', price: '10.00' },
    { id: '2', name: 'Product B', price: '15.00' },
    { id: '3', name: 'Product C', price: '20.00' },
  ];

  const handlePress = (productName) => {
    Alert.alert('Thông tin sản phẩm', `Bạn đã chọn: ${productName}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item.name)}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
});

export default FlatListScreen;
