import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {STYLES} from '../../../Constant/Style';
  import Icon from 'react-native-vector-icons/Ionicons';
  import {Color} from '../../../Constant/Color';
  import Input from '../../Components/Global/Input';
  import Button from '../../Components/Global/Button';
  import {useNavigation} from '@react-navigation/native';
  
  const OtpVerification = () => {
    const navigation = useNavigation();
    return (
      <ScrollView style={STYLES.container2}>
        <View style={{paddingHorizontal: 10, marginVertical: 20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={25} color="#4D4D4D" />
          </TouchableOpacity>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: 25,
                color: Color.mainColor,
                fontWeight: '600',
                fontFamily: 'Poppins-SemiBold',
                textAlign: 'center',
              }}>
             Verification
            </Text>
          </View>
          <View style={{marginVertical: 10, paddingHorizontal: 20}}>
            <Input type="email-address" placeholder="Email Address" />
            <View style={{marginTop: 20}}>
              <Button text="Verify" type="normal" onPress={()=>navigation.navigate("RESET_PASSWORD")} />
            </View>
          </View>
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
      </ScrollView>
    );
  };
  
  export default OtpVerification;
  
  const styles = StyleSheet.create({});
  