import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import TopHeader from '../../Components/Global/Header';
import {Color} from '../../../Constant/Color';
import Icon from 'react-native-vector-icons/Feather';
import IconE from 'react-native-vector-icons/Entypo';
import Input from '../../Components/Global/Input';
import Button from '../../Components/Global/Button';
import {useNavigation} from '@react-navigation/native';

const Checkout = () => {
  const [mobileNumber, setMobileNumber] = useState('+92 316 4889668');
  const [isEdit, setIsEdit] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={STYLES.container2}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader isBack text="Checkout" />
      </View>
      <ScrollView style={[STYLES.container, {marginTop: 10}]}>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              color: Color.mainColor,
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Delivery Address
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assest/Image/locationIcon.png')}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 14,
                  color: '#58595B',
                  fontFamily: 'Poppins-Regular',
                }}>
                Zahras Uniform Rashid Minhas Road
              </Text>
            </View>
            <TouchableOpacity>
              <Icon name="edit" size={25} color={Color.mainColor} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("PAYMENT_METHOD")}
            style={{
              width: '100%',
              height: 60,
              borderColor: '#939598',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingHorizontal: 30,
              marginTop: 20,
            }}>
            <IconE name="plus" size={22} color="#828384" />
            <Text
              style={{
                color: '#828384',
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
              }}>
              Add a Payment Method
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: 60,
              borderColor: '#939598',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 20,
            }}>
            <TextInput
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              style={{
                color: isEdit ? Color.mainColor : '#828384',
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                textAlignVertical: 'center',
                height: '100%',
              }}
              onChangeText={e => setMobileNumber(e)}
              editable={isEdit}
            />
            <TouchableOpacity onPress={() => setIsEdit(!isEdit)}>
              {isEdit ? (
                <Icon name="check-square" size={25} color={Color.mainColor} />
              ) : (
                <Icon name="edit" size={25} color={Color.mainColor} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <Button
              text="Payment Verify"
              type="normal"
              onPress={() => navigation.navigate('ORDER')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
