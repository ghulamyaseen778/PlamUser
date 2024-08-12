import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import {width} from '../../../Constant/Dimension';
import {Color} from '../../../Constant/Color';
import Button from '../../Components/Global/Button';
import Icon from 'react-native-vector-icons/Entypo';
import TopHeader from '../../Components/Global/Header';
import NearbyCard from '../../Components/Global/NearbayCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const HomePageBanner = [
    {
      id: 1,
      image: require('../../../assest/Image/banner.png'),
    },
    {
      id: 2,
      image: require('../../../assest/Image/banner.png'),
    },
    {
      id: 3,
      image: require('../../../assest/Image/banner.png'),
    },
  ];
  const flatListRef = useRef(null);
  // Function to move to next image
  const nextImage = () => {
    if (currentIndex == HomePageBanner.length - 1) {
      const nextIndex = 0;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
      return;
    }

    const nextIndex = Number(currentIndex) + 1;
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);
    // Cleanup function to clear interval on unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <>
      <ScrollView style={[STYLES.container2, {marginBottom: 80}]}>
        <View style={{paddingHorizontal: 20}}>
          <TopHeader withLogo isInput isPress />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View
            // colors={[Color.mainColor, Color.white]}
            style={{zIndex: 2, width: '100%', borderRadius: 10}}>
            <FlatList
              ref={flatListRef}
              data={HomePageBanner}
              showsHorizontalScrollIndicator={false}
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex((x / (width - 50)).toFixed(0));
              }}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      width: width,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      padding: 0,
                      margin: 0,
                    }}
                    activeOpacity={1}>
                    <Image
                      source={item.image}
                      style={{width: width - 40, height: 150, borderRadius: 10}}
                      resizeMode="stretch"
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{marginTop: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-SemiBold',
                  fontWeight: '600',
                  color: Color.mainColor,
                }}>
                Categories
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('CATEGORY')}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    color: Color.yellowColor,
                  }}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginLeft: 20}}></View>
            {categoryItem.map(item => (
              <TouchableOpacity
                style={{marginRight: 10, justifyContent: 'center'}}>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.4)',
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    resizeMode="contain"
                    source={item.image}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                    color: '#58595B',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: '600',
                color: Color.mainColor,
              }}>
              Nearby Mart
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('NEARBY')}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '400',
                  color: Color.yellowColor,
                }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <NearbyCard />
          <NearbyCard />
          <NearbyCard />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          onPress={() => {
            setModalVisible(false);
          }}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}></Pressable>
        <View style={styles.modalView}>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
              fontWeight: '600',
              fontSize: 20,
            }}>
            Set Your Location
          </Text>
          <View
            style={{
              backgroundColor: 'rgba(254, 204, 18, 0.22)',
              width: '100%',
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: '600',
                fontSize: 18,
              }}>
              Current Location
            </Text>
            <Text
              numberOfLines={2}
              style={{
                color: '#58595B',
                fontFamily: 'Poppins-Medium',
                fontWeight: '500',
                fontSize: 15,
              }}>
              3231 BARKER AVE BRONX NY 10467-6354 {'\n'} USA
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: '600',
                fontSize: 18,
              }}>
              Change the Location
            </Text>
            <Pressable>
              <Icon color={Color.mainColor} name="plus" size={25} />
            </Pressable>
          </View>
          <View style={{marginTop: 10, width: '100%'}}>
            <Button
              text="Confirm Location"
              type="normal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width,
    // height: 300,
    // top: 400,
    bottom: 0,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
