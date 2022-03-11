import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React from 'react';
import {BannerImage} from '../../assets/images';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={BannerImage} />
    </View>
  );
};

export default Banner;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    width: windowWidth * 0.9,
    height: windowHeight * 0.21,
    marginTop: -windowHeight * 0.1,
  },
  banner: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
  },
});
