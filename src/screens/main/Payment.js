import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import {IMAGES, FONTS, ICONS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import GradientButton from '../../Components/GradientButton';
import AdCard from '../../Components/AdCard';
import {useNavigation} from '@react-navigation/native';

export default function Payment() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <View
        style={{
          height: normalize(50),
          padding: normalize(10),
          backgroundColor: COLORS.white,
          justifyContent: 'space-between',
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowRadius: normalize(10),
          shadowOffset: {height: 0, width: 0},
          elevation: 10,
          shadowOpacity: 0.5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.arrow_left}
            style={{
              tintColor: COLORS.secondary,
            }}
          />
        </Pressable>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            fontSize: normalize(14),
            color: COLORS.secondary,
          }}>
          Payment
        </Text>
        <View style={{height: normalize(20)}} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            borderRadius: normalize(20),
            backgroundColor: COLORS.white,
            shadowColor: 'rgba(12, 27, 151, 0.25)',
            shadowOpacity: 0.6,
            elevation: 8,
            shadowOffset: {height: 0, width: 1},
            marginTop: normalize(35),
            padding: normalize(20),
          }}>
          <Image
            source={ICONS.card_icon}
            style={{
              height: normalize(50),
              width: normalize(90),
              resizeMode: 'center',
            }}
          />
          <TextInput
            placeholder="Card Holder Name"
            placeholderTextColor={COLORS.secondary}
            style={{
              fontFamily: FONTS.Poppins_Medium,
              color: COLORS.secondary,
              fontSize: normalize(13),
              borderWidth: 2,
              height: normalize(50),
              borderRadius: normalize(10),
              borderColor: '#EAE7E7',
              padding: normalize(10),
              marginTop: normalize(20),
            }}
          />
          <TextInput
            placeholder="Card Number"
            placeholderTextColor={COLORS.secondary}
            style={{
              fontFamily: FONTS.Poppins_Medium,
              color: COLORS.secondary,
              fontSize: normalize(13),
              borderWidth: 2,
              height: normalize(50),
              borderRadius: normalize(10),
              borderColor: '#EAE7E7',
              padding: normalize(10),
              marginTop: normalize(20),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Expiration date"
              placeholderTextColor={COLORS.secondary}
              style={{
                fontFamily: FONTS.Poppins_Medium,
                color: COLORS.secondary,
                fontSize: normalize(13),
                borderWidth: 2,
                height: normalize(50),
                borderRadius: normalize(10),
                borderColor: '#EAE7E7',
                padding: normalize(10),
                marginTop: normalize(20),
                width: '55%',
              }}
            />
            <TextInput
              placeholder="CVV"
              placeholderTextColor={COLORS.secondary}
              style={{
                fontFamily: FONTS.Poppins_Medium,
                color: COLORS.secondary,
                fontSize: normalize(13),
                borderWidth: 2,
                height: normalize(50),
                borderRadius: normalize(10),
                borderColor: '#EAE7E7',
                padding: normalize(10),
                marginTop: normalize(20),
                width: '40%',
              }}
            />
          </View>
        </View>
        <GradientButton
          title="Pay Now"
          height={normalize(60)}
          marginVertical={normalize(30)}
          marginBottom={normalize(10)}
        />
        <Text style={{textAlign: 'center', fontFamily: FONTS.Poppins_Medium}}>
          Or
        </Text>
        <TouchableOpacity
          style={{
            width: '95%',
            alignSelf: 'center',
            borderRadius: normalize(50),
            backgroundColor: COLORS.white,
            shadowColor: 'rgba(12, 27, 151, 0.25)',
            shadowOpacity: 0.6,
            elevation: 5,
            shadowOffset: {height: 0, width: 1},
            marginVertical: normalize(10),
            padding: normalize(20),
            alignItems: 'center',
            justifyContent: 'center',
            height: normalize(60),
            marginBottom: normalize(20),
          }}>
          <Image
            source={ICONS.paypal_icon}
            style={{
              height: normalize(30),
              width: normalize(53),
              resizeMode: 'center',
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
