import React, {useState} from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import {Switch} from 'react-native-switch';

import GradientButton from '../../Components/GradientButton';
import Header from '../../Components/Header';
import TextInputCustom from '../../Components/TextInput';
import {COLORS, FONTS, ICONS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import MyStatusBar from '../../utils/MyStatusBar';

export default function Sign_in(props) {
  const [value, setvalue] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar backgroundColor={COLORS.white} />
      <Header
        title="Sign In"
        extra_button="Sign Up"
        extra_button_press={() => props.navigation.navigate('Sign_Up')}
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
        <TextInputCustom placeholder="Email address" />
        <TextInputCustom placeholder="Password" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: normalize(5),
            paddingHorizontal: normalize(20),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '45%',
            }}>
            <Switch
              value={value}
              onValueChange={val => setvalue(val)}
              disabled={false}
              activeText={''}
              inActiveText={''}
              circleSize={normalize(20)}
              barHeight={normalize(20)}
              circleBorderWidth={4}
              circleBorderActiveColor={'#B3DFF9'}
              circleBorderInactiveColor={'#B3DFF9'}
              backgroundActive={'#B3DFF9'}
              backgroundInactive={'#B3DFF9'}
              circleActiveColor={'#6DA5C6'}
              circleInActiveColor={'#6DA5C6'}
              containerStyle={{
                width: normalize(12),
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                textAlign: 'center',
                fontSize: normalize(12),
                color: '#5C6066',
              }}>
              Remember
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Forgot_Password')}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                textAlign: 'center',
                fontSize: normalize(12),
                color: COLORS.black,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <GradientButton
          title="Sign In"
          onPress={() => props.navigation.navigate('Home')}
          marginVertical={normalize(15)}
        />
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            textAlign: 'center',
            fontSize: normalize(16),
          }}>
          Or
        </Text>
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
      </View>
    </SafeAreaView>
  );
}
