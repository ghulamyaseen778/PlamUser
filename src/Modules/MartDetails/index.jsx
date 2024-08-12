import {
  FlatList,
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
import Icon from 'react-native-vector-icons/AntDesign';
import {Color} from '../../../Constant/Color';
import ProductCard from '../../Components/Global/ProductCard';

const MartDetails = () => {
  const [fav, setFav] = useState(false);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'All Products',
    },
    {
      id: 2,
      name: 'Vegetables',
    },
    {
      id: 3,
      name: 'Fruits',
    },
    {
      id: 4,
      name: 'Meats',
    },
    {
      id: 5,
      name: 'Fish',
    },
  ]);
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <View style={STYLES.container2}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader isBack />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View style={{position: 'relative'}}>
          <Image
            style={{width: '100%', height: 130, borderRadius: 10}}
            source={require('../../../assest/Image/cardImg.png')}
          />
          <TouchableOpacity
            style={{
              borderRadius: 50,
              padding: 7,
              backgroundColor: 'white',
              position: 'absolute',
              right: 10,
              top: 10,
            }}
            onPress={() => setFav(!fav)}>
            {fav ? (
              <Icon name="heart" size={20} color="#ED1C24" />
            ) : (
              <Icon name="hearto" size={20} color="#ED1C24" />
            )}
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: -50}}>
          <Image
            resizeMode="contain"
            style={{width: 100, height: 100, borderRadius: 150}}
            source={require('../../../assest/Image/martLogo.png')}
          />
          <Text
            style={{
              marginTop: -5,
              fontSize: 24,
              fontFamily: 'Poppins-Medium',
              color: Color.mainColor,
            }}>
            SM Mart
          </Text>
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={{
              color: 'black',
              fontSize: 10,
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              width: '90%',
            }}>
            SM Mart mission is to provide convenience to consumers with a go to
            solution for everyday needs and build the rails that define the
            future of commerce in Pakistan so that people can shop online and
            get it delivered now.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 15, height: 15}}
                resizeMode="contain"
                source={require('../../../assest/Image/locationIcon.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                  color: '#58595B',
                  marginLeft: 5,
                }}>
                1.5 miles away
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 15, height: 15, marginTop: 2}}
                source={require('../../../assest/Image/starIcon.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                  color: '#58595B',
                  marginLeft: 5,
                }}>
                4.8
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 15, height: 15, marginTop: 2}}
                source={require('../../../assest/Image/clock.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                  color: '#58595B',
                  marginLeft: 5,
                }}>
                20-25 min
              </Text>
            </View>
          </View>
          <View style={{marginTop: 15, width: '100%'}}>
            <FlatList
              data={tabs}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>
                item?.id == selectedTab ? (
                  <TouchableOpacity
                    onPress={() => setSelectedTab(item.id)}
                    style={{
                      backgroundColor: Color.mainColor,
                      paddingHorizontal: 16,
                      paddingVertical: 6,
                      borderRadius: 20,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '400',
                        color: Color.whiteColor,
                      }}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => setSelectedTab(item.id)}
                    style={{
                      backgroundColor: '#D9D9D9',
                      paddingHorizontal: 16,
                      paddingVertical: 6,
                      borderRadius: 20,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '400',
                        color: '#58595B',
                      }}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                )
              }
            />
          </View>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#B7B7B7',
              marginVertical: 15,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
        <ProductCard
          img={require('../../../assest/Image/veg5.png')}
          name="Tomato"
          type="Vegetables"
        />
        <ProductCard
          img={require('../../../assest/Image/veg5.png')}
          name="Tomato"
          type="Vegetables"
        />
      </View>
    </View>
  );
};

export default MartDetails;

const styles = StyleSheet.create({});
