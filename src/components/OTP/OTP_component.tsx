import React, {useEffect, useRef, useState} from 'react';
import {Center, Divider, Input, Text, View} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

interface OTPProps {
  countdown: number;
  onOtpComplete: (otp: string) => void;
}

const OTP: React.FC<OTPProps> = ({countdown, onOtpComplete}) => {
  const inputRefs = useRef<any[]>([]);
  const [resendTime, setResendTime] = useState<number>(countdown);
  const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTime > 0) {
      interval = setInterval(() => {
        setResendTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      setIsResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [resendTime]);

  const handleResend = () => {
    setIsResendEnabled(false);
    setResendTime(countdown);
  };

  useEffect(() => {
    if (otp.length === 4) {
      onOtpComplete(otp);
    }
  }, [otp, onOtpComplete]);

  useFocusEffect(
    React.useCallback(() => {
      setOtp('');
      setResendTime(countdown);
      setIsResendEnabled(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const focusNextInput = (index: number, txt: string) => {
    if (txt.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (txt.length !== 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    setOtp(prevOtp =>
      txt.length === 1 ? prevOtp + txt : prevOtp.slice(0, -1),
    );
  };

  return (
    <View flex={1}>
      <Center flex={1} flexDir="row">
        {Array.from({length: 4}).map((_, index) => (
          <React.Fragment key={index}>
            <Input
              ref={ref => (inputRefs.current[index] = ref)}
              onChangeText={txt => {
                focusNextInput(index, txt);
              }}
              width={horizontalScale(70)}
              height={verticalScale(60)}
              bg="white"
              borderColor={'accent.200'}
              _focus={{
                borderColor: 'primary.500',
              }}
              rounded={16}
              textAlign="center"
              fontFamily={'Inter'}
              fontSize={scaleFontSize(20)}
              keyboardType="numeric"
              maxLength={1}
            />
            {index < 3 && <Divider orientation="vertical" opacity={0} w={3} />}
          </React.Fragment>
        ))}
      </Center>
      <Center flexDir="row">
        <Text
          fontFamily={'Inter'}
          fontSize={scaleFontSize(16)}
          fontWeight={600}
          onPress={handleResend}
          disabled={!isResendEnabled}
          color={isResendEnabled ? 'primary.500' : 'accent.500'}>
          Resend OTP
        </Text>
        {resendTime > 0 && (
          <Text
            fontFamily={'Inter'}
            fontSize={scaleFontSize(16)}
            fontWeight={600}
            color={'accent.500'}>
            ({resendTime}s)
          </Text>
        )}
      </Center>
    </View>
  );
};

export default OTP;
