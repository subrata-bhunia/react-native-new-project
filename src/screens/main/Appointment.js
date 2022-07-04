import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import normalize from '../../utils/helpers/normalize';
import {COLORS, FONTS, ICONS, IMAGES} from '../../themes/Themes';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../Components/GradientButton';

const Appointment = () => {
  const navigation = useNavigation();
  var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var times = [
    {time: '09:00 AM', select: true},
    {time: '10:00 AM', select: false},
    {time: '11:00 AM', select: false},
    {time: '12:00 PM', select: false},
    {time: '01:00 PM', select: false},
    {time: '02:00 PM', select: false},
  ];

  const getDate = type => {
    var date = new Date();
    var todate = date.getDate();
    var currentMonth = date.getMonth();
    var currentDay = date.getDay();
    var getFullYear = date.getFullYear();
    if (type == 'onlyDate') {
      return todate;
    } else if (type == 'onlyDayName') {
      return `${dayNames[currentDay].substring(0, 3)}`;
    } else {
      return `${dayNames[currentDay]}, ${month[currentMonth]} ${todate}, ${getFullYear}`;
    }
  };
  const SelectedDate = ({day}) => {
    return (
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        start={{x: 0.0, y: 1}}
        end={{x: 1, y: 1.0}}
        style={{
          height: normalize(40),
          width: normalize(40),
          borderRadius: normalize(40),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: normalize(35),
            width: normalize(35),
            borderRadius: normalize(35),
            backgroundColor: COLORS.background_color,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              color: COLORS.black,
              fontSize: normalize(16),
            }}>
            {day}
          </Text>
        </View>
      </LinearGradient>
    );
  };

  const DayView = ({day, opacity}) => {
    return (
      <View
        style={{
          height: normalize(35),
          width: normalize(35),
          borderRadius: normalize(35),
          backgroundColor: COLORS.background_color,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            color: COLORS.black,
            fontSize: normalize(16),
            opacity: opacity,
          }}>
          {day}
        </Text>
      </View>
    );
  };

  const TimeCard = ({time, select = false}) => {
    return (
      <View
        style={{
          height: normalize(40),
          width: normalize(140),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: select ? COLORS.secondary : COLORS.textInputColor,
          elevation: 2,
          marginVertical: normalize(5),
          borderRadius: normalize(3),
        }}>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            color: select ? COLORS.white : '#858585',
            fontSize: normalize(12),
          }}>
          {time}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.background_color}}>
      <MyStatusBar backgroundColor={COLORS.white} />
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
          Appointment
        </Text>
        <View style={{height: normalize(20)}} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: normalize(10),
            marginVertical: normalize(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGES.profile_image}
              style={{
                height: normalize(60),
                width: normalize(60),
                borderRadius: normalize(60),
                resizeMode: 'cover',
              }}
            />
            <View style={{marginLeft: normalize(10)}}>
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Medium,
                  color: COLORS.black,
                  fontSize: normalize(16),
                }}>
                John Doe
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Roboto_Regular,
                  color: COLORS.subtextColor1,
                  fontSize: normalize(14),
                }}>
                Lorem Ipsum is simply
              </Text>
            </View>
          </View>
          <Image
            source={ICONS.calender_icon}
            style={{
              height: normalize(40),
              width: normalize(40),
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: normalize(8),
            backgroundColor: COLORS.secondary,
            alignItems: 'center',
            paddingHorizontal: normalize(15),
          }}>
          <Image source={ICONS.arrow_left} />
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              color: COLORS.white,
              fontSize: normalize(14),
            }}>
            {getDate()}
          </Text>
          <Image
            source={ICONS.arrow_left}
            style={{transform: [{rotate: '180deg'}]}}
          />
        </View>
        <View
          style={{
            padding: normalize(24),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <DayView day={getDate('onlyDate') - 2} opacity={0.2} />
            <DayView day={getDate('onlyDate') - 1} opacity={0.5} />
            <SelectedDate day={getDate('onlyDate')} />
            <DayView day={getDate('onlyDate') + 1} opacity={0.5} />
            <DayView day={getDate('onlyDate') + 2} opacity={0.2} />
          </View>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              color: COLORS.black,
              fontSize: normalize(14),
              textAlign: 'center',
            }}>
            {getDate('onlyDayName')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: normalize(10),
            alignSelf: 'center',
            // width: '95%',
            justifyContent: 'space-between',
          }}>
          {times.map((itm, ind) => {
            return <TimeCard time={itm.time} select={itm.select} key={ind} />;
          })}
        </View>
        <View
          style={{
            height: normalize(130),
            borderWidth: 1,
            margin: 13,
            borderRadius: normalize(10),
            padding: normalize(5),
            borderColor: COLORS.secondary,
          }}>
          <TextInput
            placeholder="Write reason for appointment here"
            placeholderTextColor={COLORS.secondary}
            multiline
            style={{
              fontFamily: FONTS.Poppins_Medium,
              color: COLORS.secondary,
              fontSize: normalize(13),
            }}
          />
        </View>
        <GradientButton title="Schedule Now" marginVertical={normalize(10)} />
      </ScrollView>
    </View>
  );
};

export default Appointment;
