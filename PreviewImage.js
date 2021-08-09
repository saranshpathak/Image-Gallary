import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const PreviewImage = ({ navigation, route }) => {
  return (
    <View style={styles.previewImageComponent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Your Image <Icon name={'image'} size={35} color={'white'} />
        </Text>

        <Pressable
          style={styles.goBack}
          android_ripple={{ color: 'grey', borderless: true }}
          onPress={() => {
            navigation.navigate('CollectionImages');
          }}>
          <Icon name={'caret-left'} size={55} color={'white'} />
        </Pressable>
      </View>
      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          {
            <Image
              source={{
                uri:
                  route && route.params && route.params.image_url ||
                  'https://picsum.photos/id/1000/600/900'
              }}
              style={styles.img}
            />
          }
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  previewImageComponent: {
    flex: 1,
  },
  header: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    backgroundColor: 'black',
    position: 'relative',
  },
  body: {
    flex: 9,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  goBack: {
    position: 'absolute',
    top: 0,
    // borderColor: 'red',
    // borderWidth: 1,
    height: '100%',
    width: '20%',
    padding: 20,
    justifyContent: 'center',
    fontSize: 30,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  contentContainerStyle:{
    flex:1
  }
});
export default PreviewImage;
