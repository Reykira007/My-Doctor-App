import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadii lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button type="seconary" title="Sign In" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
