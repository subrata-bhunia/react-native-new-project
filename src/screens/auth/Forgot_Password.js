import React from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header';
import TextInputCustom from '../../Components/TextInput';
import {COLORS, FONTS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import MyStatusBar from '../../utils/MyStatusBar';
import GradientButton from '../../Components/GradientButton';
export default function Forgot_Password(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar backgroundColor={COLORS.white} />
      <Header
        title="Forgot Password"
        sub_title="Enter your email or phone number to recover your password"
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: -normalize(40),
          borderTopRightRadius: normalize(30),
          borderTopLeftRadius: normalize(30),
          padding: normalize(10),
          paddingVertical: normalize(25),
        }}>
        <TextInputCustom placeholder="Email or Phone number" />
        <GradientButton
          title="Next"
          marginVertical={10}
          onPress={() => props.navigation.navigate('Verify')}
        />
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              textAlign: 'center',
              fontSize: normalize(14),
              color: '#7D7D7D',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
