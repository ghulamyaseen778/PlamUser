import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../../../Constant/Color';

const Button = ({type,text,onPress,style}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[{
        backgroundColor:type=="normal"? Color.mainColor:Color.secondaryColor,
        borderRadius: 6,
        height: 55,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },style]}>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 18,
          color:type=="normal"? Color.whiteColor:Color.mainColor,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
