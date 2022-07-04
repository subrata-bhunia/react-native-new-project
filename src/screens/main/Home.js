import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import ImageBackgroundWithText from '../../Components/ImageBackgroundWithText';
import DrawerNavigation from '../../navigator/DrawerNavigation';
import {COLORS, ICONS, FONTS, IMAGES} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import MyStatusBar from '../../utils/MyStatusBar';

const Data = [
  {
    title: 'Latest Updates',
    sub_title: `Everyone's puzzle is unique. People have different goals, and face different circumstances. And then the puzzle can change throughout your lifetime. We'll help explain the pieces, and the fit inside your individual puzzle.`,
    image: IMAGES.first,
  },
  {
    title: 'Financial Planning ',
    sub_title: `Everyone's puzzle is unique. People have different goals, and face different circumstances. And then the puzzle can change throughout your lifetime. We'll help explain the pieces, and the fit inside your individual puzzle.`,
    image: IMAGES.first,
  },
  {
    title: 'Investment Strategy',
    sub_title: `Individual stories get the headlines, but portfolio mix needs to match your stage in life, and your ultimate objectives.`,
    image: IMAGES.Investment,
  },
  {
    title: 'Insurance',
    sub_title: `All insurance is not the same. Understand what you need and why. Then, find the plan and the price to fit your budget`,
    image: IMAGES.Insurance,
  },
  {
    title: 'Medicare Toolkit ',
    sub_title: `Medicare is challenging because there is new language and many moving parts. The toolkit is exclusively available on this app, and includes a special edition of the best-selling Maximize Your Medicare.`,
    image: IMAGES.medicare,
  },
  {
    title: 'Education',
    sub_title: `The message of Jae's Corner is that financial topics can be understood by everyone, if they can block out the tremendous amount of noise. Blocking out the noise can be difficult, watch these videos to help keep you on the right track.`,
    image: IMAGES.education,
  },
];
export default function Home(props) {
  const [visible, setvisible] = useState(false);
  const bottomTabNavigatorHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <MyStatusBar backgroundColor={COLORS.white} />
      <View
        style={{
          height: normalize(40),
          padding: normalize(10),
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowRadius: normalize(10),
          shadowOffset: {height: 0, width: 0},
          elevation: 20,
          shadowOpacity: 0.5,
        }}>
        <Pressable onPress={() => setvisible(true)}>
          <Image source={ICONS.menu_icon} />
        </Pressable>
      </View>
      <DrawerNavigation
        drawerVisible={visible}
        onNavigate={() => setvisible(false)}
      />
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: normalize(20),
            fontFamily: FONTS.Poppins_Bold,
            fontSize: normalize(20),
            color: COLORS.black,
          }}>
          Jae’s Corner
        </Text>
        <View
          style={{
            borderWidth: normalize(0.5),
            width: normalize(50),
            alignSelf: 'center',
            borderColor: COLORS.primary,
            margin: normalize(7),
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: FONTS.Roboto_Regular,
            fontSize: normalize(14),
            color: COLORS.black,
            paddingHorizontal: normalize(20),
          }}>
          Financial Information & Insight To Pursue Your Best Self
        </Text>
        <View>
          {Data.map((itm, ind) => {
            return (
              <ImageBackgroundWithText
                key={ind}
                title={itm.title}
                back_image={itm.image}
                sub_title={itm.sub_title}
              />
            );
          })}
        </View>
        <View style={{height: bottomTabNavigatorHeight}} />
      </ScrollView>
    </SafeAreaView>
  );
}
