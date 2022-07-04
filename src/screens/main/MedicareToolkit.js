import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, ICONS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import GradientButton from '../../Components/GradientButton';
import AdCard from '../../Components/AdCard';
import BookImage from '../../Components/BookImage';
import PostCard from '../../Components/PostCard';
import {useNavigation} from '@react-navigation/native';
import Sliding from '../../Components/Sliding';

const slides = [
  {
    title: 'Medicare ABCs Session 1',
    sub_title: 'Introduction',
    post_by: 'by Jae | Jul 5, 2021 | Medicare ABCs',
  },
  {
    title: 'Medicare ABCs Session 1',
    sub_title: 'Introduction',
    post_by: 'by Jae | Jul 5, 2021 | Medicare ABCs',
  },
  {
    title: 'Medicare ABCs Session 1',
    sub_title: 'Introduction',
    post_by: 'by Jae | Jul 5, 2021 | Medicare ABCs',
  },
  {
    title: 'Medicare ABCs Session 1',
    sub_title: 'Introduction',
    post_by: 'by Jae | Jul 5, 2021 | Medicare ABCs',
  },
  {
    title: 'Medicare ABCs Session 1',
    sub_title: 'Introduction',
    post_by: 'by Jae | Jul 5, 2021 | Medicare ABCs',
  },
  {
    title: 'Medicare ABCs Session 1',
    sub_title: 'Introduction',
    post_by: 'by Jae | Jul 5, 2021 | Medicare ABCs',
  },
  {
    title: 'Medicare ABCs Session 1',
    sub_title: 'Introduction',
    post_by: 'by Jae | Jul 5, 2021 | Medicare ABCs',
  },
];

export default function MedicareToolkit() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="Medicare Toolkit"
        back_image={IMAGES.madicare_back}
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginVertical: normalize(20),
            backgroundColor: COLORS.background_color,
          }}>
          <BookImage book_image={IMAGES.book_image} />
          <GradientButton
            title="Order"
            width={normalize(150)}
            marginVertical={normalize(20)}
            onPress={() => navigation.navigate('Payment')}
          />
        </View>
        <View>
          <GradientButton title="Medicare Questionnaire" />
          <GradientButton title="Apply For Medicare Part B" />
          <GradientButton title="Employer Coverage Form" />
          <GradientButton title="Online Medigap Quoting Tool" />
          <GradientButton title="Medicare Advantage Quoting" />
          <GradientButton title="Part D Quoting" />
          <GradientButton title="Choosing A Medigap Policy (2022)" />
          <GradientButton title="Medicare And You (2022)" />
        </View>
        {/* Featured Posts */}
        <View style={{padding: normalize(7)}}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              fontSize: normalize(20),
              color: COLORS.black,
            }}>
            Featured Posts
          </Text>
          <View
            style={{
              width: normalize(60),
              height: normalize(2),
              marginVertical: normalize(10),
              backgroundColor: COLORS.primary,
            }}
          />
          <PostCard
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/4d87/c9d2/9b41fa65cf0a4ba8001563e4a0914032?Expires=1653868800&Signature=Tctu0gACKJKBxYG8MQA~Q5RLSoIJuFM6B9A-LH~hSdzJKD6-e8iNp0x-BK~bAv4FXu9ZxdyWXwIlkusi1Fb9A5eNSUD7tMV3iHfzcLaQFCB6kRN9vLdhm6461wdcpcEY-2ttM8dt2EWe1n-a~HiEoVgcsFXIeH-7QwYXx~MQjCUbCSwmzuYNjrsbPnUUL78inUOhDPb3yFmkHsUUa5yWfB5Hda3F-X6KAcLX-ysDW7-0X90M3L8IQWAm7db6oaa1wxLHkRu2AgBRAb-wf~ILsInAJCNxk8V1fKXRuIOA3Xcl9ja30KicdrpzTmSGffmXI3tzoygET37aIOclOhZbSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            title="Lorem Ipsum is simply dummy."
            sub_title="It is a long established fact that a reader. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <PostCard
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/e9bc/8dd8/9e73e979221a441d6cd22b3f7691fbf6?Expires=1653868800&Signature=DGj~TiZm~0DI~b8G049VWemG08~u2SvJ3~4IF39FgTb1QNX2fIHtJUUudXwF5BmenZNqcps6A-XeDd95xPa3K5u3syaykUUly1EJKUkmrM102GfRWcU4eE8KzVp2zhFsnGHM2FsfwkW6PuAgMch6xFSsR4le2~f464kTtGKFhD7eZwhdhjk5jkqlErWWrG3-Wjensg0u2F1qoUT3QIUR3P~LyoEsEsseUh-tbTYoKqle4t4ggxt4zzIVSJSqbm0jpCvOyVnJDSp96cCAIFIXsGhWFRZzfcHaBZjS11VGvBYcd0~Kkz-F6yt~~xU3TYIxv5Auva2xUnqaCvXFjYza~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            title="Lorem Ipsum is simply dummy."
            sub_title="It is a long established fact that a reader. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </View>
        {/* maximize Your medicare: author’s additional videos */}
        <View style={{backgroundColor: COLORS.background_color}}>
          <View style={{padding: normalize(7)}}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                fontSize: normalize(20),
                color: COLORS.black,
                textTransform: 'capitalize',
              }}>
              maximize Your medicare: author’s additional videos
            </Text>
            <View
              style={{
                width: normalize(60),
                height: normalize(2),
                marginVertical: normalize(10),
                backgroundColor: COLORS.primary,
              }}
            />
          </View>
          <View>
            <Sliding slides={slides} />
          </View>
        </View>
        {/* maximize Your medicare: author’s additional videos */}
        <View style={{padding: normalize(7)}}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              fontSize: normalize(20),
              color: COLORS.black,
              textTransform: 'capitalize',
            }}>
            selected videos for 2022
          </Text>
          <View
            style={{
              width: normalize(60),
              height: normalize(2),
              marginVertical: normalize(10),
              backgroundColor: COLORS.primary,
            }}
          />
          <PostCard
            post_type="video"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/e456/170a/8599e514b97982e4460e03e2d3284eb0?Expires=1653868800&Signature=Lri2W~p~kcp7~fWbBdOkXvhsVEDyryJjCh3VlAIVo7kbNPzmUD6Y4Zrbq-hU1j1Ybzxzdt85Mpv5dRYMCueTKTDScLHRhML~vmuidID02blMpHRkFI2tKILFfHwtVLFgIN78poPKJWIzNydyJBADDJ-sqnaGCQvSOAyY6CvkjgrMn8pdT8PN1GfDr1T9i02ur4HUEg0Dqfvw1Elw91cFoBi9hnvt1xu6bse2sxk9tCsEwITjGqsPTr~A1xNnEpo5FmLiAiUE4CbDZAonTSvAakpotKwWHPl3bOmc1tgWbetDMpvX3jUNCr6xKlvYdiW80hhFvi3N9ntTtCMLz3kBkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            title="Lorem Ipsum is simply dummy."
            sub_title="It is a long established fact that a reader."
          />
          <PostCard
            post_type="video"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/e456/170a/8599e514b97982e4460e03e2d3284eb0?Expires=1653868800&Signature=Lri2W~p~kcp7~fWbBdOkXvhsVEDyryJjCh3VlAIVo7kbNPzmUD6Y4Zrbq-hU1j1Ybzxzdt85Mpv5dRYMCueTKTDScLHRhML~vmuidID02blMpHRkFI2tKILFfHwtVLFgIN78poPKJWIzNydyJBADDJ-sqnaGCQvSOAyY6CvkjgrMn8pdT8PN1GfDr1T9i02ur4HUEg0Dqfvw1Elw91cFoBi9hnvt1xu6bse2sxk9tCsEwITjGqsPTr~A1xNnEpo5FmLiAiUE4CbDZAonTSvAakpotKwWHPl3bOmc1tgWbetDMpvX3jUNCr6xKlvYdiW80hhFvi3N9ntTtCMLz3kBkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            title="Lorem Ipsum is simply dummy."
            sub_title="It is a long established fact that a reader."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
