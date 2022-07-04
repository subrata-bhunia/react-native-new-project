import React from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import Header from '../../Components/Header';
import {COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import MyStatusBar from '../../utils/MyStatusBar';
import TextInputCustom from '../../Components/TextInput';
import GradientButton from '../../Components/GradientButton';
export default function Change_Password(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar backgroundColor={COLORS.white} />
      <Header title="Change Password" />
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
        <TextInputCustom placeholder="New Password" />
        <TextInputCustom placeholder="Confirm New Password" />
        <GradientButton
          title="Reset Password"
          marginVertical={10}
          onPress={() => props.navigation.navigate('Sign_Up')}
        />
      </View>
    </SafeAreaView>
  );
}
