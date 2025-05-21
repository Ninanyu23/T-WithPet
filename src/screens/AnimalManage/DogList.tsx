// DogListScreen.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {fetchDogs, Dog} from '../../service/api/dogs';

const DogListScreen = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    fetchDogs().then(setDogs);
  }, []);

  const renderItem = ({item}: {item: Dog}) => (
    <View style={styles.card}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <View style={styles.info}>
        <Text>이름: {item.name}</Text>
        <Text>나이: {item.age}</Text>
        <Text>견종: {item.breed}</Text>
        <Text>성별: {item.gender}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={dogs}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{padding: 16}}
    />
  );
};

export default DogListScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#eee',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    justifyContent: 'center',
  },
});
