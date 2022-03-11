import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import {COLOR_ACTIVE, COLOR_INACTIVE} from '../../utils/constant';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? (
        <Icons name="home" size={28} color="#0D28A6" />
      ) : (
        <Icons name="home" size={28} color="#222222" />
      );
    }

    if (label === 'Car List') {
      return isFocused ? (
        <Icons name="bars" size={28} color="#0D28A6" />
      ) : (
        <Icons name="bars" size={28} color="#222222" />
      );
    }

    if (label === 'Account') {
      return isFocused ? (
        <Icons name="user" size={28} color="#0D28A6" />
      ) : (
        <Icons name="user" size={28} color="#222222" />
      );
    }

    return;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 10,
    fontWeight: isFocused ? 'bold' : '300',
    color: isFocused ? COLOR_ACTIVE : COLOR_INACTIVE,
  }),
});
