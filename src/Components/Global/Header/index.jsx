import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Input from '../Input';
import Icon from 'react-native-vector-icons/AntDesign';
import Econ from 'react-native-vector-icons/Entypo';
import {Color} from '../../../../Constant/Color';
import {useNavigation} from '@react-navigation/native';

const TopHeader = ({
  withLogo = false,
  isInput = false,
  isBack = false,
  isPress = false,
  text,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', marginVertical: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: isBack ? 'space-between' : 'center',
          alignItems: 'center',
        }}>
        {isBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Econ name="chevron-small-left" color={Color.mainColor} size={35} />
          </TouchableOpacity>
        )}
        {withLogo ? (
          <Image
            source={require('../../../../assest/Image/logo3.png')}
            style={{
              width: 90,
              height: 90,
              alignSelf: 'center',
              marginLeft: isBack ? -25 : 0,
            }}
            resizeMode="contain"
          />
        ) : (
          text && (
            <Text
              style={{
                marginLeft: isBack ? -25 : 0,
                fontSize: 20,
                fontWeight: '600',
                fontFamily: 'Poppins-SemiBold',
                color: Color.mainColor,
              }}>
              {text}
            </Text>
          )
        )}
        <Text> </Text>
      </View>
      {isInput && (
        <View style={{marginTop:text?10:0}}>
          <Input
          isIcon={true}
          placeholder={'Search'}
          IconComponent={<Icon name="search1" size={20} color="#58595B" />}
          onPress={() => (isPress ? navigation.navigate('SEARCH') : {})}
        />
          </View>
      )}
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({});
