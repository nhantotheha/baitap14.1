import React from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SectionListScreen = () => {
  const groupedProducts = [
    { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
    { title: 'Category B', data: ['Product B1', 'Product B2'] },
    { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
  ];

  const handlePress = (productName) => {
    Alert.alert('Thông tin sản phẩm', `Bạn đã chọn: ${productName}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
  header: {
    backgroundColor: '#dfe4ea',
    padding: 8,
    marginBottom: 4,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SectionListScreen;
