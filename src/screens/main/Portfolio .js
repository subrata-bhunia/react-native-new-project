import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import AdCard from '../../Components/AdCard';
import PostCard from '../../Components/PostCard';
import {SkypeIndicator} from 'react-native-indicators';
export default function Portfolio() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="Portfolio Strategy"
        titleAlign="center"
        back_image={IMAGES.portfolio_back}
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
              Strategy To Fit Your Situation
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              The strategy must be clear. Then, you can consider what specific
              assets belong, to fit your long-term goals.
            </Text>
          </View>
          <PostCard
            post_type="video"
            title="Lorem Ipsum is simply dummy."
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/955a/817f/c2976ef13eee22ef11b9d8982c4bbe97?Expires=1653868800&Signature=a29PZy6dtzOse~HM15IKDdi9ofBG6D49~974EB7hMbU48qiruHW54fE2zWUl2i7zbqByps2~h8rkCZjtxxlZoj9XcrbtN-OBUAXKIqr-MAtc8eSs9FlFD~svjrPOqTnDh~koK3SMjYwPppjkaMqVVg7GRoDXBBiu5kg8UK5xa48kZ451zLYZYUpjlxtawqdvSqOgwi7fJhzVjAv430AVORR2O6mQw7cZiGD03T26X5BgANNilI12Qodu6YTnvSFMAvMAy9sGoi1zPB628R4ZFExHbCFuNMhJ212Q-TwNJzuujng4JZlt-B4blOsBJnMw-MTWLIzZtfUAHuDWk-pP2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <PostCard
            post_type="video"
            title="Lorem Ipsum is simply dummy."
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/5658/c517/47d7369810c87d995429dd38639c155f?Expires=1653868800&Signature=AXE-pQ2TJWdaq9m2IGtuRKETr5h4nq0o8CTQARPEF6iLBcTChdmo~ED~Jpnk4oF03tnr7~anDaBbgHn-14Zhxacj6xFwZhlt4tElnJ8y8GWKac7-zl110c~~gMEUlhbRhT8cuMPKfb1jbOVT5Nbrea7lazX~kg5Ud8HnX~cscR~9DBIZBn0qsvaBDssUkRgaSDyHn7Q-g9S~VD0FQC4ptvmTTkGQ~0~26EuYQ8ClTLb6TmuI0YrEFR5Bcp0fxif1FloNTOt9luaQ~9QbJ3-r~zdZzz6FIzEVvCGL8QQ6GX9v2XKukAM8qFveoligy3K7NPQpDZs9AGoD1~2zo12Bpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <SkypeIndicator
            size={normalize(20)}
            style={{
              height: normalize(10),
              width: normalize(10),
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
