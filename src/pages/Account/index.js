import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {AlluraPark11} from '../../assets/images';
import {BUTTON_COLOR} from '../../utils/constant';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View>
        <Image style={styles.image} source={AlluraPark11} />
      </View>
      <Text style={styles.text}>
        Upps! You have never an account. Start creating an account to make
        transactions on BCR easier.
      </Text>
      <View style={styles.cardButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.02,
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    marginTop: windowHeight * 0.03,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  image: {
    width: '100%',
    marginTop: windowHeight * 0.18,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.22,
    height: windowHeight * 0.05,
    backgroundColor: BUTTON_COLOR,
    borderRadius: 2,
  },
  textButton: {
    fontWeight: '700',
    color: 'white',
  },
  cardButton: {flex: 1, justifyContent: 'center', flexDirection: 'row'},
});
