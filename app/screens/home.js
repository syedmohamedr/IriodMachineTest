import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  Dimensions,
  StatusBar,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import React, {useRef, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const DATA = [
  {
    id: '1',
    title: 'Weignt Loss',
    image:
      'http://proteinium.iroidtechnologies.in/meal_category_images/6165294da47e5.jpg',
  },
  {
    id: '2',
    title: 'Fitness',
    image:
      'http://proteinium.iroidtechnologies.in/meal_category_images/61652942d9e4b.jpg',
  },
  {
    id: '3',
    title: 'Bulking',
    image:
      'http://proteinium.iroidtechnologies.in/meal_category_images/616524c164afa.jpg',
  },
  {
    id: '4',
    title: 'Weight Gain',
    image:
      'http://proteinium.iroidtechnologies.in/banner_images/6165313162cf3.jpg',
  },
];

const home = () => {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState('1');

  const topComponents = () => {
    return (
      <View style={styles.topComponentsContainer}>
        <Image
          style={styles.logo}
          source={require('../common/image/logo.png')}
        />
        <MaterialCommunityIcons
          name="bell"
          color={'#fff'}
          size={26}
          style={styles.notificationIcon}
        />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <ImageBackground
        source={{uri: item.image}}
        style={styles.renderItemImage}
        borderRadius={10}>
        <View style={styles.renderItemInsideContainer}>
          <Text style={{marginLeft: 10}}>{item.title}</Text>
        </View>
        <View style={styles.renderItemArrowIcon}>
          <Entypo name="chevron-up" color={'#3BB0EC'} size={26} />
        </View>
      </ImageBackground>
    );
  };
  const renderCarosalItem = ({item}) => {
    return (
      <View style={styles.crosalContainer}>
        <Image
          source={{uri: item.image}}
          style={styles.crosalImage}
          borderRadius={10}></Image>
      </View>
    );
  };

  const renderHeaderComponents = () => {
    return (
      <View>
        <Carousel
          ref={isCarousel}
          data={DATA}
          renderItem={renderCarosalItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          autoplayInterval={3000}
          onSnapToItem={index => setIndex(index)}
          autoplay
          enableMomentum={false}
        />
        <Pagination
          dotsLength={4}
          activeDotIndex={parseInt(index)}
          carouselRef={isCarousel}
          dotStyle={styles.paginationDotStyle}
          tappableDots={true}
          inactiveDotStyle={styles.paginationInactiveDot}
        />
      </View>
    );
  };
  const mainComponents = () => {
    return (
      <View style={styles.mainComponents}>
        <FlatList
          ListHeaderComponent={renderHeaderComponents}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#3BB0EC" />
      {topComponents()}
      {mainComponents()}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  mainComponents: {
    height: '100%',
    width: '93%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topComponentsContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: '#3BB0EC',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: '35%',
    width: '30%',
    alignSelf: 'center',
  },
  notificationIcon: {
    marginTop: 25,
    position: 'absolute',
    right: '5%',
  },
  renderItemImage: {
    height: 150,
    width: '100%',
    marginVertical: 10,
  },
  renderItemInsideContainer: {
    height: '30%',
    backgroundColor: '#929292',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 0.8,
    justifyContent: 'center',
  },
  renderItemArrowIcon: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -15,
    borderRadius: 100,
    right: '5%',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crosalContainer: {
    width: '90%',
    height: 160,
    borderRadius: 10,
    marginTop: 5,
  },
  crosalImage: {
    width: '100%',
    height: 160,
  },
  paginationDotStyle: {
    width: 13,
    height: 13,
    borderRadius: 19 / 2,
    marginTop: -12,
    backgroundColor: '#5DA7A3',
  },
  paginationInactiveDot: {
    backgroundColor: 'black',
    marginTop: -12,
  },
});
