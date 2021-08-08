import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Collections = ({ navigation }) => {
  const [collections, setCollections] = useState(
    Array.from({ length: 10 }).fill(undefined)
  );
  return (
    <View style={styles.collectionComponent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {' '}
          Collections <Icon name={'appstore1'} size={35} color="white" />
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainerStyle}>
          {collections.map((item, index) => (
            <Pressable
              style={styles.collectionImage}
              android_ripple={{ color: 'gray', borderless: true }}>
              <Image
                source={{ uri: `https://picsum.photos/seed/${index + 1}/300` }}
                style={styles.img}
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default Collections;

const styles = StyleSheet.create({
  collectionComponent: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
  },
  body: {
    flex: 9,
    // backgroundColor:'grey'
    //borderColor: 'red',
    //borderWidth: 1,
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    //backgroundColor:'red',
    textAlignVertical: 'center',
  },
  collectionImage: {
    height: 140,
    width: '48%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  scroll: {
    //flex:1,
    //flexDirection:'row',
    backgroundColor: '',
  },
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    flexWrap: 'wrap',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
