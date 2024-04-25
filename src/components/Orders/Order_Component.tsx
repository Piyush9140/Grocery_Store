import * as React from 'react';
import {View, Text, Pressable} from 'native-base';
import Delivered from '../Delivered';
import {scaleFontSize} from '../../assets/scaling';

interface OrderComponentProps {
  onPress?: () => void;
}

export const OrderComponent: React.FC<OrderComponentProps> = ({onPress}) => {
  return (
    <Pressable p={4} bg={'white'} mb={1} onPress={onPress}>
      <View flexDir={'row'} justifyContent={'space-between'} my={2}>
        <Text
          fontFamily={'Inter'}
          fontSize={scaleFontSize(14)}
          fontWeight={500}
          numberOfLines={2}
          flexShrink={1}>
          Cadbury Bournville Rich Cocoa 70% Dark
        </Text>
        <Text
          fontFamily={'Inter'}
          fontSize={scaleFontSize(14)}
          fontWeight={500}>
          ₹87.49
        </Text>
      </View>
      <View
        borderStyle={'dashed'}
        borderWidth={0.5}
        borderRadius={1}
        borderColor={'accent.100'}
        my={2}
      />
      <View flexDir={'row'} justifyContent={'space-between'}>
        <View>
          <Text
            fontFamily={'Inter'}
            fontSize={scaleFontSize(12)}
            fontWeight={500}
            flexShrink={1}
            color={'accent.400'}>
            Order #897JDHK39392
          </Text>
          <Text
            fontFamily={'Inter'}
            fontSize={scaleFontSize(12)}
            fontWeight={500}
            flexShrink={1}
            color={'accent.400'}>
            25/02/24 at 09:00pm
          </Text>
        </View>
        <Delivered />
      </View>
    </Pressable>
  );
};
