import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import AdCard from '../../Components/AdCard';
import PostCard from '../../Components/PostCard';
import {SkypeIndicator} from 'react-native-indicators';
export default function Basics() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="Financial Literacy"
        titleAlign="center"
        back_image={IMAGES.education}
      />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginTop: normalize(20),
          }}>
          <View style={{paddingHorizontal: normalize(10)}}>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              Jargon and noise combine to make finance difficult to understand.
              These are the correct building blocks that you can use for a
              lifetime.
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Bold,
                fontSize: normalize(14),
                color: COLORS.black,
                marginTop: normalize(15),
              }}>
              Basic Understanding Is The First Step
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              There is a lot of misunderstanding when it comes to understanding
              personal finance. In order to ignore the noise, it is vital to
              have a firm grasp of the basics.
            </Text>
          </View>
          <PostCard
            post_type="video"
            title="Building Blocks"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/bfa4/41aa/95ff02102eb432b8eb069226aac502de?Expires=1653868800&Signature=WKb4V9XXSgY0o6SXnLjCIP5jkax0QjObivh-fVDn8NQDbUg1Dn4dmcLscX2dbLttzrQenvLp4hAdpooZpmjWz~7N8y2rLw7scbJaRg~Kp4Kz5FJ2rzFL1sV8NMbQfa8zS6K2zJpPvqY~yTGl5fmyWOcRjd7La9~A9dhlpf-fxKk8Pb0~k5~gHp26yGFDsfYVSKQO2063bIm8WhddqmGJvjH7JkzAL4wOcwpq7SjTVdf-LuFMP43w~x77bOmtC3aAfJiuDAqEHlvC4uciIy7bqu-xNWdt3xwuOApHGpX1uzPTGu-EjcI5rmmEZw3d3RFy-t8pElsZ-k7Htcp7jFOP8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="The errors in understand begin right from, well, the beginning. And then time passes, to solidify an understanding that wrong, right from the start..."
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
