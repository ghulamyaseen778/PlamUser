import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {STYLES} from '../../../Constant/Style';
import {Color} from '../../../Constant/Color';
import Button from '../../Components/Global/Button';
import {useNavigation} from '@react-navigation/native';

const OnBoardingWelcome = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={STYLES.container2}>
      <View style={{paddingHorizontal: 20, marginTop: 50}}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../../assest/Image/logo2.png')} />
        </View>
        <View style={{alignItems: 'center', marginVertical: 40}}>
          <Image
            resizeMode="contain"
            source={require('../../../assest/Image/WelcomeImage.png')}
          />
        </View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            fontFamily: 'Poppins-SemiBold',
            color: Color.mainColor,
            textAlign: 'center',
          }}>
          Welcome back!
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            fontFamily: 'Poppins-Medium',
            color: '#58595B',
            textAlign: 'center',
          }}>
          Are you ready for shopping today?
        </Text>
        <Button
          style={{marginTop: 20}}
          text="Go Shopping Now"
          type="normal"
          onPress={() => navigation.replace('TAB')}
        />
      </View>
    </ScrollView>
  );
};

export default OnBoardingWelcome;

const styles = StyleSheet.create({});
