import {Button, Pressable, Text, View} from 'native-base';
import * as React from 'react';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';
import {SvgXml} from 'react-native-svg';
import {orangeLocation} from '../../assets/images/icons/orangeLocation';
import {edit} from '../../assets/images/icons/edit';
import {deleteIcon} from '../../assets/images/icons/delete';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppNavigatorParamList} from '../../navigation/MainNavigation';

interface SavedAddressProps {
  navigation: StackNavigationProp<AppNavigatorParamList, 'Addresses'>;
}

const SavedAddress: React.FC<SavedAddressProps> = ({navigation}) => {
  const gotoAddAddress = () => {
    navigation.navigate('AddAddress');
  };
  return (
    <View py={verticalScale(10)}>
      <View
        w={'100%'}
        bg={'white'}
        flexDir={'row'}
        px={horizontalScale(10)}
        py={verticalScale(24)}
        alignItems={'center'}>
        <SvgXml xml={orangeLocation} height={24} width={24} />
        <View mx={5} width={horizontalScale(190)}>
          <Text fontSize={scaleFontSize(16)}>Home</Text>
          <Text
            color={'accent.400'}
            numberOfLines={2}
            fontSize={scaleFontSize(14)}>
            Lorem ipsum dolor sit amet consectetur. Et at lectus congue ut
            sagittis sed dui. Aliquet porta sed diam tellus.
          </Text>
        </View>
        <View flexDir={'row'}>
          <SvgXml xml={edit} height={24} width={24} />
          <View w={5} />
          <SvgXml xml={deleteIcon} height={24} width={24} />
        </View>
      </View>
      <View
        w={'100%'}
        bg={'white'}
        flexDir={'row'}
        px={horizontalScale(10)}
        py={verticalScale(24)}
        alignItems={'center'}>
        <SvgXml xml={orangeLocation} height={24} width={24} />
        <View mx={5} width={horizontalScale(190)}>
          <Text fontSize={scaleFontSize(16)}>Home</Text>
          <Text
            color={'accent.400'}
            numberOfLines={2}
            fontSize={scaleFontSize(14)}>
            Lorem ipsum dolor sit amet consectetur. Et at lectus congue ut
            sagittis sed dui. Aliquet porta sed diam tellus.
          </Text>
        </View>
        <View flexDir={'row'}>
          <SvgXml xml={edit} height={24} width={24} />
          <View w={5} />
          <SvgXml xml={deleteIcon} height={24} width={24} />
        </View>
      </View>
      <Button
        variant={'outline'}
        borderStyle={'dashed'}
        borderRadius={10}
        borderColor={'primary.500'}
        mt={5}
        mx={horizontalScale(10)}
        h={50}
        _text={{color: 'primary.400', fontSize: scaleFontSize(20)}}
        onPress={gotoAddAddress}>
        Add Address
      </Button>
    </View>
  );
};

export default SavedAddress;
