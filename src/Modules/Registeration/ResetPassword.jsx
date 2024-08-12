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
  
  const ResetPassword = () => {
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
              Reset Password
            </Text>
          </View>
          <View style={{marginVertical: 10, paddingHorizontal: 20}}>
          <View style={{marginTop: 12}}>
          <Input placeholder="Password" isPassword={true} />
        </View>
          <View style={{marginTop: 12}}>
          <Input placeholder="Confirm Password" isPassword={true} />
        </View>
            <View style={{marginTop: 20}}>
              <Button text="Sumbit" type="normal" onPress={()=>navigation.navigate("LOGIN")} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default ResetPassword;
  
  const styles = StyleSheet.create({});
  