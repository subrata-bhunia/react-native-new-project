import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import ProfileHeader from '../../Components/ProfileHeader';
import {COLORS, IMAGES} from '../../themes/Themes';
import MyStatusBar from '../../utils/MyStatusBar';
import normalize from '../../utils/helpers/normalize';
import TextInputCustom from '../../Components/TextInput';
import GradientButton from '../../Components/GradientButton';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const bottomTabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <ProfileHeader
        back_image={IMAGES.profile_header_back_image}
        title="My Profile"
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: -normalize(70),
          borderTopRightRadius: normalize(30),
          borderTopLeftRadius: normalize(30),
          padding: normalize(10),
          paddingVertical: normalize(25),
        }}>
        <View
          style={{
            marginBottom: normalize(25),
          }}>
          <Image
            source={IMAGES.profile_image}
            style={{
              height: normalize(100),
              width: normalize(100),
              borderRadius: normalize(100),
              resizeMode: 'cover',
              borderWidth: normalize(3),
              borderColor: '#F2F4FF',
              position: 'absolute',
              alignSelf: 'center',
              top: -normalize(80),
            }}
          />
        </View>
        <ScrollView>
          <TextInputCustom
            placeholder="John Doe"
            editable={false}
            height={normalize(55)}
          />
          <TextInputCustom
            placeholder="04/02/1990"
            editable={false}
            height={normalize(55)}
          />
          <TextInputCustom
            placeholder="johndoe@gmail.com"
            editable={false}
            height={normalize(55)}
          />
          <TextInputCustom
            placeholder="Male"
            editable={false}
            height={normalize(55)}
          />
          <GradientButton
            title="Edit Profile"
            marginVermtical={normalize(10)}
            onPress={() => navigation.navigate('EditProfile')}
          />
          <View style={{height: bottomTabBarHeight}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
