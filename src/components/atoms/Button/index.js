import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({type, title, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'seconary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'seconary' ? '#112340' : 'white',
  }),
});
