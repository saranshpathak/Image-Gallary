import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const CollectionImages = ({ navigation, route }) => {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState((route && route.params && route.params.collectionIndex || 0));
   
  useEffect(() => {
      axios.get(`https://picsum.photos/v2/list?page=${
        pageNumber
        }&limit=20`).then((res) => {
          const data = res && res.data;
          setImages([...images, ...data]);
      })
  },[])


  return (
    <View style={styles.collectionComponent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {' '}
          Images  <Icon name={'image'} size={35} color={'white'} />
        </Text>
        <Pressable
        style = {styles.goBack}
        onPress={ () => { navigation.navigate('Collections')}}>
         <Icon name={'caret-left'} size={55} color={'white'} /> 
         </Pressable>
      </View>
      <View style={styles.body}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainerStyle}>
          {images.map((item, index) => {
             let imageUrl = item.download_url;
            imageUrl = imageUrl.substring(0, imageUrl.lastIndexOf('/')); // remove height
            imageUrl = imageUrl.substring(0, imageUrl.lastIndexOf('/')); // remove width
            imageUrl = imageUrl+'/200';
           return <Pressable
           onPress={()=>{ navigation.navigate('PreviewImage',{image_url:item.download_url})}}
              style={{...styles.collectionImage}}
              android_ripple={{ color: 'gray', borderless: true }}>
              <Image
                source ={{ uri:imageUrl }}
                style={styles.img}
              />
            </Pressable>
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  collectionComponent: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'black',
    //borderColor: 'black',
    //borderWidth: 1,
    justifyContent:"center"
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
    height: 100,
    width: '32%',
    //borderColor: 'black',
    //borderWidth: 1,
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
  goBack:{
    position:"absolute",
    justifyContent:"center",
    marginTop:5,
  }
});

export default CollectionImages;
