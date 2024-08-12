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
import {useNavigation} from "@react-navigation/native"

const Login = () => {
  const [isRemeber, setIsRemeber] = useState(false);
  const navigation = useNavigation()
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
          Login to your account
        </Text>
      </View>
      <View style={{marginVertical: 10, paddingHorizontal: 20}}>
        <View style={{marginTop: 12}}>
          <Input placeholder="Email Address" />
        </View>
        <View style={{marginTop: 12}}>
          <Input placeholder="Password" isPassword={true} />
        </View>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  marginTop: 5,
                }}>
                Remember Me
              </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("FORGOT_PASSWORD")}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '400',
                  color: '#F00',
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Button type="normal" text="Sign in with Email" onPress={()=>navigation.navigate("SIGNUP")} />
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{width: width / 3, height: 1, backgroundColor: '#B3B3B3'}}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              fontWeight: '500',
              color: '#B3B3B3',
              marginHorizontal: 10,
            }}>
            Or
          </Text>
          <View
            style={{width: width / 3, height: 1, backgroundColor: '#B3B3B3'}}
          />
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              borderColor: '#B3B3B3',
              borderWidth: 1,
              height: 60,
              // paddingHorizontal:10,
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assest/Image/google.png')}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                color: '#58595B',
                marginLeft: 10,
              }}>
              Sign In using Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10}}>
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

export default Login;

const styles = StyleSheet.create({});
