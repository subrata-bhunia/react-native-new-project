import React from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header';
import {COLORS, FONTS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import MyStatusBar from '../../utils/MyStatusBar';
import GradientButton from '../../Components/GradientButton';
export default function Verify(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar backgroundColor={COLORS.white} />
      <Header
        title="Verify your email or phone"
        sub_title="We have send your link in your email address or mobile, Please click on that link to verify"
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
        <GradientButton
          title="Ok"
          onPress={() => props.navigation.navigate('Change_Password')}
        />
        <TouchableOpacity
          style={{
            height: normalize(50),
            borderRadius: normalize(30),
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: normalize(5),
            borderWidth: 1,
            borderColor: '#6DA5C6',
          }}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              textAlign: 'center',
              fontSize: normalize(14),
              color: '#6DA5C6',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
