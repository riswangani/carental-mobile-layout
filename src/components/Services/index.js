import {
  StyleSheet,
  Dimensions,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {serviceImage} from '../../assets/images';

const Services = () => {
  return (
    <View style={styles.container}>
      {serviceImage.map((service, index) => {
        return (
          <TouchableOpacity key={index} style={styles.item}>
            <View style={styles.background}>
              <Image style={styles.image} source={service.image} />
            </View>
            <Text style={styles.itemText}>{service.layanan}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Services;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: windowHeight * 0.05,
    marginHorizontal: 20,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemText: {
    marginTop: windowHeight * 0.012,
  },
  background: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.08,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#DEF1DF',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
