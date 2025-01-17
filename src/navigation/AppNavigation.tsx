/* eslint-disable react/no-unstable-nested-components */
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {AppNavigatorParamList, RootStackParamList} from './MainNavigation';
import {ChevronLeftIcon, SearchIcon, Text, View} from 'native-base';
import {Settings} from '../screens/Settings';
import PersonalDetails from '../screens/PersonalDetails';
import Orders from '../screens/Orders/MyOrders';
import SingleOrder from '../screens/Orders/SingleOrder';
import Delivered from '../components/Delivered';
import {horizontalScale, scaleFontSize} from '../assets/scaling';
import Categories from '../screens/Categories';
import Home from '../screens/Home';
import OrderSuccess from '../screens/Orders/Order-Success';
import SavedAddress from '../screens/Address/SavedAddress';
import AddAddress from '../screens/Address/AddAddress';
import Payment from '../screens/Payment';
import Search from '../screens/Search';
import {SvgXml} from 'react-native-svg';
import {filter} from '../assets/images/icons/filter';
import Cart from '../screens/Cart';
import CategoryProducts from '../screens/Category Products/CategoryProducts';
import ProductDetails from '../screens/ProductDetails';
import GoBack from '../components/Navigation/GoBack';

type AppNavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'App'>;
};

const Stack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigation: React.FC<AppNavigationProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({navigation}) => ({
          headerTitle: () => (
            <View>
              <Text fontSize={'fs18'} color={'#1F2937'} fontWeight={'bold'}>
                Payment Methods
              </Text>
              <Text fontSize={'fs12'} color={'#6B7280'} fontWeight={'bold'}>
                1 Item | Total ₹42
              </Text>
            </View>
          ),
          headerStyle: {height: 100},
          headerTitleAlign: 'left',
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
          // headerRight: () => <Delivered mr={3} h={horizontalScale(25)} />,
        })}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={() => ({headerStyle: {height: 100}})}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => ({
          headerTitleStyle: {
            fontFamily: 'Inter_Medium',
            fontSize: scaleFontSize(18),
            color: '#1F2937',
          },
          headerStyle: {
            height: 100,
            borderBottomColor: 'accent.100',
          },
          headerTitleAlign: 'center',
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({navigation}) => ({
          headerTitle: () => (
            <View>
              <Text fontSize={'fs18'}>Product</Text>
            </View>
          ),
          headerStyle: {height: 100},
          headerTitleAlign: 'left',
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
          // headerRight: () => <Delivered mr={3} h={horizontalScale(25)} />,
        })}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetails}
        options={({navigation}) => ({
          headerTitle: 'Your Profile',
          headerTitleStyle: {
            fontFamily: 'Inter_Medium',
            fontSize: scaleFontSize(18),
            color: '#1F2937',
          },
          headerStyle: {height: 100},
          headerTitleAlign: 'center',
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={({navigation}) => ({
          headerTitle: 'My Orders',
          headerTitleStyle: {
            fontFamily: 'Inter_Medium',
            fontSize: scaleFontSize(18),
            color: '#1F2937',
          },
          headerStyle: {height: 100, borderBottomColor: 'accent.100'},
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="SingleOrder"
        component={SingleOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Addresses"
        component={SavedAddress}
        options={({navigation}) => ({
          headerTitle: 'Saved Addresses',
          headerTitleStyle: {
            fontFamily: 'Inter_Medium',
            fontSize: scaleFontSize(18),
            color: '#1F2937',
          },
          headerStyle: {height: 100, borderBottomColor: 'accent.100'},
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={({navigation}) => ({
          headerTitle: 'Add Address Details',
          headerTitleStyle: {
            fontFamily: 'Inter_Medium',
            fontSize: scaleFontSize(18),
            color: '#1F2937',
          },
          headerStyle: {height: 100, borderBottomColor: 'accent.100'},
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) => ({
          headerTitle: 'Cart(3)',
          headerStyle: {height: 100, borderBottomColor: 'accent.100'},
          headerTitleStyle: {
            fontFamily: 'Inter_Medium',
            fontSize: scaleFontSize(18),
            color: '#1F2937',
          },
          headerTitleAlign: 'center',
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({navigation}) => ({
          headerStyle: {height: 100},
          headerTitleAlign: 'center',
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="CategoryProducts"
        component={CategoryProducts}
        options={({navigation}) => ({
          headerTitle: () => (
            <View>
              <Text fontSize={'fs14'}>Ice Creams & More</Text>
              <Text fontSize={'fs12'} color={'accent.400'}>
                703 items
              </Text>
            </View>
          ),
          headerStyle: {height: 100},
          headerTitleAlign: 'left',
          headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
          headerRight: () => (
            <SearchIcon
              size={'xl'}
              mr={5}
              color={'black'}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
