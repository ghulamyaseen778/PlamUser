import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import TopHeader from '../../Components/Global/Header';
import {Color} from '../../../Constant/Color';
import Icon from 'react-native-vector-icons/Entypo';
import {height, width} from '../../../Constant/Dimension';
import Button from '../../Components/Global/Button';

const ProductDetail = () => {
  const [isModal, setIsModal] = useState(false);
  const [categoryItem, setCategoryItem] = useState([
    {
      id: 1,
      name: 'Vegetables',
      image: require('../../../assest/Image/carrot.png'),
    },
    {
      id: 2,
      name: 'Fruits',
      image: require('../../../assest/Image/furit.png'),
    },
    {
      id: 3,
      name: 'Meats',
      image: require('../../../assest/Image/meat.png'),
    },
    {
      id: 4,
      name: 'Fish',
      image: require('../../../assest/Image/fish.png'),
    },
  ]);
  return (
    <View style={[STYLES.container2, {position: 'relative'}]}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader text={'Cauliﬂower'} isBack />
      </View>
      <ScrollView style={[STYLES.container, {marginBottom: 85}]}>
        <Image
          style={{
            marginVertical: 10,
            width: 200,
            height: 200,
            alignSelf: 'center',
          }}
          resizeMode="contain"
          source={require('../../../assest/Image/veg5.png')}
        />
        <View style={{paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-SemiBold',
                  fontWeight: '600',
                  fontSize: 25,
                }}>
                Tomato
              </Text>
              <Text
                style={{
                  color: '#58595B',
                  fontFamily: 'Poppins-Medium',
                  fontWeight: '500',
                  fontSize: 16,
                  marginTop: -10,
                }}>
                Vegetables
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-SemiBold',
                  fontWeight: '600',
                  fontSize: 20,
                }}>
                3kg
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: '#58595B',
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              3.2
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 5, marginTop: -8}}>
              <Icon name="star" size={20} color={Color.yellowColor} />
              <Icon name="star" size={20} color={Color.yellowColor} />
              <Icon name="star" size={20} color={Color.yellowColor} />
              <Icon name="star" size={20} color={Color.yellowColor} />
              <Icon name="star" size={20} color="#D9D9D9" />
            </View>
          </View>
          <View>
            <Text
              numberOfLines={5}
              ellipsizeMode="tail"
              style={{
                color: '#58595B',
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                marginVertical: 10,
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iusto
              exercitationem officiis, porro tempore quas expedita perferendis,
              dolor laudantium quam, illo quasi enim obcaecati facilis totam
              repudiandae odio ex similique eaque cupiditate assumenda inventore
              suscipit culpa! Modi, rem cupiditate fugiat nobis accusamus cumque
              iure. Ad sequi voluptatum natus perferendis debitis.
            </Text>
          </View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              marginBottom: 5,
            }}>
            Related Items
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* <View style={{marginLeft: 20}}></View> */}
            {categoryItem.map(item => (
              <TouchableOpacity
                style={{marginRight: 10, justifyContent: 'center'}}>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    // borderColor: 'rgba(0,0,0,0.4)',
                    borderRadius: 10,
                    backgroundColor: '#F3F3F3',
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    resizeMode="contain"
                    source={item.image}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View
        style={{
          // marginTop: height / 15,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 20,
          // paddingBottom: 20,
          // borderRadius:10,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          height: 80,
          elevation: 10,
          shadowOffset: {
            height: 2,
          },
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: Color.mainColor,
              fontFamily: 'Poppins-Medium',
            }}>
            Total Price
          </Text>
          <View style={{flexDirection: 'row', marginTop: -10}}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Poppins-SemiBold',
                color: Color.yellowColor,
              }}>
              $
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Poppins-SemiBold',
                color: Color.mainColor,
                marginLeft: 5,
              }}>
              20.55
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setIsModal(true)}
          style={{
            width: '50%',
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            backgroundColor: Color.yellowColor,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
              color: Color.whiteColor,
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      {isModal && (
        <>
        <TouchableOpacity style={{  backgroundColor: 'rgba(0,0,0,0.8)',
        width: '100%',
        height: '100%',position: 'absolute',
        top: 0,
        left: 0,zIndex:2}}></TouchableOpacity>
        <View
          style={{
            // backgroundColor: 'rgba(0,0,0,0.8)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex:3
          }}>
            
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              padding: 10,
              borderRadius: 10,
              zIndex:2
            }}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => setIsModal(false)}>
              <Image source={require('../../../assest/Image/crossIcon.png')} />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assest/Image/modalIMG.png')} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  width: '80%',
                  color: '#58595B',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Your order has been added successfully{' '}
              </Text>
            </View>
            <Button
              type="normal"
              text="Go To Cart"
              onPress={() => setIsModal(false)}
            />
            <View style={{marginTop: 10}}>
              <Button text="Back to home" onPress={() => setIsModal(false)} />
            </View>
          </View>
        </View>
        </>
      )}
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
