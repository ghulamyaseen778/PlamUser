import {StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../../Constant/Color';

const Input = ({placeholder, type = 'default', isPassword,isIcon=false,IconComponent,onPress=()=>{}}) => {
  const [isHide, setIsHide] = useState(true);
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={1}
      style={{
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#B3B3B3',
        borderWidth: 1,
        paddingHorizontal: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TextInput
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={isPassword&&isHide}
        style={{height: 60, color: Color.mainColor, fontSize: 18, width: '90%'}}
      />
      {isPassword &&
        (isHide ? (
          <TouchableOpacity onPress={()=>setIsHide(!isHide)}>
            <Icon name="eye-off-outline" size={25} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={()=>setIsHide(!isHide)}>
            <Icon name="eye-outline" size={25} />
          </TouchableOpacity>
        ))}
        {
          isIcon&&<TouchableOpacity onPress={onPress}>{IconComponent}</TouchableOpacity>
        }
    </TouchableOpacity>
  );
};

export default Input;

const styles = StyleSheet.create({});
