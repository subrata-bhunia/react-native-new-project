import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, ICONS, COLORS} from '../../themes/Themes';
import PostCard from '../../Components/PostCard';
import normalize from '../../utils/helpers/normalize';
import GradientButton from '../../Components/GradientButton';

export default function Videos() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="Videos"
        back_image={IMAGES.video_back}
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <ScrollView>
        <View
          style={{
            marginTop: normalize(20),
          }}>
          <View style={{paddingHorizontal: normalize(10)}}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                fontSize: normalize(14),
                color: COLORS.black,
              }}>
              Comprehensive Financial Planning
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you.
            </Text>
          </View>
          <PostCard
            post_type="video"
            title="GH2 Benefits Comprehensive Financial Planning Service"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/d76a/e3eb/c120d65f99374dba3b883d0930ebae74?Expires=1653868800&Signature=C~7IGiKrawYoAOdRaPkHJLDRsZ0VYQiPJxIh4zumHh2lNpnTa1ZWcalE3VNp9WUFptt-UIqAD5-~nzUqziOe~kc8g~EkHHiQ4W~86w4Tb0kP8MoP~5S58ldkaLu2NxqYnIhOPncLMqjYg5tn0DteIMK6Bwu~2GCu7~ojSS-VgyiEJi3RO49LtcEFHW8CgaVYKtET9~j9INmzDgZ6LFlAYwgYM4wSGKnCYmOOQeqIDsVRoqbgXs1npLm8jLX4IMw3dUtrfVoa1rf2QgaKxxNxcKgpgOSaiiNbsQmDitszKhUVDvJ2z1OMzgFHRNhXrBbJZqJprtqUPs2foHY3tmzVlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </View>
        <View
          style={{
            marginTop: normalize(20),
          }}>
          <View style={{paddingHorizontal: normalize(10)}}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                fontSize: normalize(14),
                color: COLORS.black,
              }}>
              Jae's Corner Channel
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you.
            </Text>
          </View>
          <PostCard
            post_type="video"
            title="Welcome to Jae's Corner"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/848f/4174/2fd31377d16b6bae0261dbcfda685303?Expires=1653868800&Signature=CBV6nJUEJWEHqzf79CPhp0u~EWCGxNVeTZYRQhgLsT5xcN5HwpActHKhR-VxGMheSXbji9J~gKmLVDI0vUJXDZvDIk1j7ileHgad2YrFfoyTkO8fcPUiUNaKAfgSjlL0o3Mg-K9jk2Y2JG~v9rrl-iKyak3vHwiF-gV8j75tojmt~D0r5ayNai4Bz0aBbkRAA3BDV5HbcCfmlQNLsWIngpp5TYEV4UL8CQycYa86rOSzei4EkuuD7KT14HNDuVcFUmIQzFx2HZ~qwR--36eXZt2ksnKhe4-8ghemcm6UYaIDB1XthX~Id1hr92hsC4ZXF8BMkGqHrBJmZsNJf3dseg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <GradientButton title={`Jae's Corner Channel`} />
        </View>
        <View
          style={{
            marginTop: normalize(20),
          }}>
          <View style={{paddingHorizontal: normalize(10)}}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                fontSize: normalize(14),
                color: COLORS.black,
              }}>
              Maximize Your Medicare Channel
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you.
            </Text>
          </View>
          <PostCard
            post_type="video"
            title="Maximize Your Medicare - 2022 Edition Now"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/d2c8/0e55/36cb19c23bae1279f324c3260e6e3daf?Expires=1653868800&Signature=hO8OK2XvY0bhZvrkoe9i5-GlYHuN3Qqhi~-240Ewy1AI9GUsz7-ihIIh4~DBdYGaLxxa271TVWR1JtW4LDgsIOqxF~-6c3Ek65~4ZbxZzX3hs--ybbcnXfPi0ulhWnHDO4y3v9lRoN7MRI9tRlxGecRtRAHVavpR6tmn8499W1gCnaQ~F0MB6hdgp1CUfntDJpjv2KfLfMqO5sO0vcQYXNlk7Xej-aMo3ITZyK6dOPP7GPy9dYDdLHVSN7wLYOb18vq0N4VBu7kH0oN3qp38lbp9Jj6eKe9vAtF8TSOFKj9fxAyEfTyEOADS5Nr1avV0qinwKqmG8ayRNnUK0ld5Hg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <GradientButton title="Maximize Your Medicare Channel" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
