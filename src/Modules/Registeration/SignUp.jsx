import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import {Color} from '../../../Constant/Color';
import Input from '../../Components/Global/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../Components/Global/Button';
import {width} from '../../../Constant/Dimension';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [isRemeber, setIsRemeber] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView style={STYLES.container2}>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Image source={require('../../../assest/Image/logo2.png')} />
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: Color.mainColor,
            fontSize: 25,
            fontWeight: '600',
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
          }}>
          Sign up your account
        </Text>
      </View>
      <View style={{marginVertical: 10, paddingHorizontal: 20}}>
        <View style={{marginTop: 12}}>
          <Input placeholder="Full Name" />
        </View>
        <View style={{marginTop: 12}}>
          <Input placeholder="Email Address" />
        </View>
        <View style={{marginTop: 12}}>
          <Input placeholder="Mobile Number" />
        </View>
        <View style={{marginTop: 12}}>
          <Input placeholder="Password" isPassword={true} />
        </View>
        <View style={{marginTop: 12}}>
          <Input placeholder="Confirm Password" isPassword={true} />
        </View>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setIsRemeber(!isRemeber)}>
                {isRemeber ? (
                  <Icon color={Color.mainColor} size={30} name="check-box" />
                ) : (
                  <Icon
                    color={'rgba(0,0,0,0.4)'}
                    size={30}
                    name="check-box-outline-blank"
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '400',
                  color: '#58595B',
                  marginLeft: 4,
                  width:"90%"
                }}>
                By signing up, i agree with Terms of use and Privacy policy
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Button
            type="normal"
            text="Sign up"
            onPress={() => navigation.navigate('WELCOME_SCREEN')}
          />
        </View>
        <View style={{marginVertical: 10, marginTop: -10}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#58595B',
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
                fontWeight: '400',
              }}>
              Don’t have an account?{' '}
            </Text>
            <Text
              style={{
                color: Color.yellowColor,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
