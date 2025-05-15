import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Dog } from '../types/Dog';

interface Props {
  dog: Dog;
}

const DogCard: React.FC<Props> = ({ dog }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: dog.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.text}>이름: {dog.name}</Text>
        <Text style={styles.text}>나이: {dog.age}</Text>
        <Text style={styles.text}>견종: {dog.breed}</Text>
        <Text style={styles.text}>성별: {dog.gender}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 4, // Android 그림자
    shadowColor: '#000', // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '500',
  },
});

export default DogCard;
