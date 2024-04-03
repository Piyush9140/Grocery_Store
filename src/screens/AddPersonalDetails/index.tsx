import {Button, Center, Input, Text, View} from 'native-base';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from '../../navigation/MainNavigation';
import {width} from '../../assets/scaling';
import validators from '../../utils/validators';
import {Alert} from 'react-native';

type AddPersonalDetailsProps = {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'PersonalDetails'>;
};

export const AddPersonalDetails: React.FC<AddPersonalDetailsProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const isContinueDisabled = name === '' || email === '';

  const handleContinue = () => {
    if (!validators.stringDigitWithSpace(name)) {
      Alert.alert('Enter valid Name');
    } else if (!validators.isEmail(email)) {
      Alert.alert('Enter valid Email');
    } else {
      Alert.alert('Registered');
    }
  };

  return (
    <View flex={1} justifyContent={'space-between'}>
      <View p={5}>
        <Text mb={2} bold>
          Full Name*
        </Text>
        <Input
          value={name}
          onChangeText={txt => setName(txt)}
          variant={'filled'}
          rounded={15}
          mb={10}
          bg={'accent.200'}
          placeholder={'Enter Here'}
        />
        <Text bold mb={2}>
          Email ID*
        </Text>
        <Input
          value={email}
          onChangeText={txt => setEmail(txt)}
          variant={'filled'}
          rounded={15}
          mb={10}
          bg={'accent.200'}
          placeholder={'Enter Here'}
          keyboardType="email-address"
        />
        <Text mb={2} bold>
          Secondary Mobile Number(Optional)
        </Text>
        <Input
          InputLeftElement={
            <Text fontSize="sm" marginLeft={5}>
              +91
            </Text>
          }
          variant={'filled'}
          rounded={15}
          bg={'accent.200'}
          placeholder={'Enter Here'}
          fontSize="sm"
          keyboardType="number-pad"
        />
      </View>
      <View
        h={100}
        w={width}
        borderTopLeftRadius={14}
        borderTopRightRadius={14}
        bg={'common.white'}
        shadow={1}>
        <Center flex={1} px={5}>
          <Button
            w={'100%'}
            h={50}
            rounded={12}
            bg={isContinueDisabled ? 'accent.200' : 'primary.500'}
            _text={{
              fontSize: 'lg',
              color: isContinueDisabled ? 'accent.400' : 'white',
            }}
            disabled={isContinueDisabled}
            onPress={handleContinue}>
            Continue
          </Button>
        </Center>
      </View>
    </View>
  );
};
