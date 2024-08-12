import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Modules/SplashScreen';
import OnBoarding from './src/Modules/Onboarding';
import {Color} from './Constant/Color';
import Login from './src/Modules/Registeration/Login';
import ForgotPassword from './src/Modules/Registeration/ForgotPassword';
import OtpVerification from './src/Modules/Registeration/OtpVerification';
import SignUp from './src/Modules/Registeration/SignUp';
import ResetPassword from './src/Modules/Registeration/ResetPassword';
import OnBoardingWelcome from './src/Modules/Onboarding/Welcome';
import BottomTabNavigation from './Navigation';
import SearchScreen from './src/Components/Global/SearchScreen';
import Category from './src/Modules/CategoryScreen';
import NearByMart from './src/Modules/NearBy';
import SingleScreen from './src/Modules/SingleScreen';
import MartDetails from './src/Modules/MartDetails';
import ProductDetail from './src/Modules/ProductDetails';
import {Cart} from './Context';
import Checkout from './src/Modules/Checkout';
import PaymentMethod from './src/Modules/Checkout/Screens/Payment';
import Order from './src/Modules/Order';
import TrackOrder from './src/Modules/Order/Screens/TrackOrder';
import Rating from './src/Modules/Order/Screens/Rating';

const Stack = createNativeStackNavigator();

const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <Cart.Provider value={{setCartData, cartData}}>
        <StatusBar
          backgroundColor={Color.whiteColor}
          barStyle={'dark-content'}
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="SPLASH_SCREEN">
            <Stack.Screen name="SPLASH_SCREEN" component={SplashScreen} />
            <Stack.Screen name="ON_BOARDING" component={OnBoarding} />
            <Stack.Screen name="LOGIN" component={Login} />
            <Stack.Screen name="SIGNUP" component={SignUp} />
            <Stack.Screen name="TAB" component={BottomTabNavigation} />
            <Stack.Screen name="FORGOT_PASSWORD" component={ForgotPassword} />
            <Stack.Screen name="OTP_VERIFICATION" component={OtpVerification} />
            <Stack.Screen name="RESET_PASSWORD" component={ResetPassword} />
            <Stack.Screen name="WELCOME_SCREEN" component={OnBoardingWelcome} />
            <Stack.Screen name="CHECKOUT" component={Checkout} />
            <Stack.Screen name="ORDER" component={Order} />
            <Stack.Screen name="TRACK_ORDER" component={TrackOrder} />
            <Stack.Screen name="RATING" component={Rating} />
            <Stack.Screen name="PAYMENT_METHOD" component={PaymentMethod} />
            <Stack.Screen name="SEARCH" component={SearchScreen} />
            <Stack.Screen name="CATEGORY" component={Category} />
            <Stack.Screen name="NEARBY" component={NearByMart} />
            <Stack.Screen name="PRODUCTS_SCREEN" component={SingleScreen} />
            <Stack.Screen name="MART_DETAILS" component={MartDetails} />
            <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </Cart.Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
