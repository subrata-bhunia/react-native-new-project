import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, ICONS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import GradientButton from '../../Components/GradientButton';
import AdCard from '../../Components/AdCard';
import PostCard from '../../Components/PostCard';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
export default function Planning() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="Planning Is The Key"
        titleAlign="center"
        back_image={IMAGES.planing_back}
      />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginTop: normalize(20),
          }}>
          <View style={{paddingHorizontal: normalize(10)}}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Bold,
                fontSize: normalize(14),
                color: COLORS.black,
              }}>
              Lorem Ipsum
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              Financial Planning Is vital because your specific goals will
              change as you age from young adult to retire.
            </Text>
          </View>
          <PostCard
            post_type="video"
            title="Financial Planning"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/ba0f/5255/f47e7c7c44de88cda397df1aebe4dd46?Expires=1653868800&Signature=Nx7FYuW8ZkHK8WLgzzJBuFkfy6yzBH-bjxs9NjDS~PTa0QuQMZEceEe9WYJyPt2OF4cviIfUW~nWJcsCtld128GrVKBZmx-51tJfqmm4mSMEJtjrxajW-BEXP9old-qblUKZB2hGw9BskV5biKiJy~R0CyOtFz-wVO6-YAM6YxS12Ob0hA0pGwxi~bsTbTcAeLCCrSFGxfcReT~QrO~Q-rRbmWtkluenXb6NpF-SayjROkBdR5GJgKqyASn7v87Rl4kFyXSThVgdeSBD1urpNQDUSlCioFEff1dWiKUyL43xM1wiw9-AcptKlTdZoTfFeCE5rAHV4ijgiTCDGXmnyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <SkypeIndicator
            size={normalize(20)}
            style={{
              height: normalize(18),
              width: normalize(18),
              alignSelf: 'center',
              marginTop: normalize(20),
            }}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <AdCard
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            sub_title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/1aac/d32f/509441040c4afb22d16281a30b2c5fd2?Expires=1653868800&Signature=Au93mqBt2U3EVYuPauHKVFpEj2~8vryPvufKYuv1GhCYZoW1JaoOadiplpu1V6XBxNVciGNxwqJGJCLN2xgvlvisoqxJu5Gx0G9N21ExtLYGtgkP6lvjheoCae760kPK-4FlTYzDTGAFY8a0NaxBh3bZxLWcz-JDpxZTNhxSILNjawtHXdssenyJDybEWciwujH8Eg9b0WV~xndjQrEjiliAg83Ur-phy-6ysahyqwSQqBsW2f51d8aVE1dCafgB-EnlOn4oArIoxc2cwT6FNNYVlMF-57oet3DvboDJtSSS1-geFTyXnqnHRgGhsXYA-KB38sjxCNfU2TdZmYeU4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
