import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import GradientButton from '../../Components/GradientButton';
import Header from '../../Components/Header';
import TextInputCustom from '../../Components/TextInput';
import {COLORS, ICONS, FONTS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import MyStatusBar from '../../utils/MyStatusBar';

export default function Sign_Up(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar backgroundColor={COLORS.white} />
      <Header
        title="Sign Up"
        // height={normalize(190)}
        extra_button="Sign In"
        sub_title={`Don't forget to sign up to the free Newsletter, with frequent updates delivered to your inbox.`}
      />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: -normalize(40),
          borderTopRightRadius: normalize(30),
          borderTopLeftRadius: normalize(30),
          padding: normalize(10),
          paddingVertical: normalize(25),
        }}>
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '95%',
              alignSelf: 'center',
              paddingHorizontal: normalize(20),
              elevation: 5,
              backgroundColor: COLORS.white,
              shadowOffset: {
                height: 10,
                width: 10,
              },
              marginVertical: 5,
              height: normalize(50),
              borderRadius: normalize(30),
            }}>
            <Image source={ICONS.google} />
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                color: COLORS.black,
              }}>
              Continue with Google
            </Text>
            <Image source={ICONS.arrow_right} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '95%',
              alignSelf: 'center',
              paddingHorizontal: normalize(20),
              elevation: 5,
              backgroundColor: COLORS.white,
              shadowOffset: {
                height: 10,
                width: 10,
              },
              height: normalize(50),
              borderRadius: normalize(30),
              marginVertical: 5,
            }}>
            <Image source={ICONS.facebook} />
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                color: COLORS.black,
              }}>
              Continue with Facebook
            </Text>
            <Image source={ICONS.arrow_right} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            textAlign: 'center',
            fontSize: normalize(16),
          }}>
          Or
        </Text>
        <TextInputCustom placeholder="Full Name" />
        <TextInputCustom placeholder="Email" />
        <TextInputCustom placeholder="Password" />
        <TextInputCustom placeholder="Confirm Password" />
        <GradientButton
          title="Sign Up"
          marginVertical={normalize(10)}
          marginBottom={normalize(30)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
