import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import Rectangle from '../assets/rectangle2.svg';
import Rainbow from '../assets/rainbow.svg';
import Grass from '../assets/grass.svg';
import Cloud1 from '../assets/cloud1.svg';
import Cloud2 from '../assets/clouds2.svg';
import Cloud3 from '../assets/clouds3.svg';
import Cloud4 from '../assets/clouds4.svg';
import Cloud5 from '../assets/cloud5.svg';
import Button from '../assets/Button.svg';
import Boy from '../assets/Boy.svg';
import Parachute from '../assets/parachute.svg';

const Home = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Rectangle style={styles.back} />
      <Rainbow
        style={[styles.rainbowIcon, styles.iconLayout]}
        resizeMode="cover"
      />
      <Grass
        style={[styles.grassIcon, styles.buttonChildPosition]}
        resizeMode="cover"
      />
      <Cloud1
        style={[styles.cloudIcon1, styles.iconLayout]}
        resizeMode="cover"
      />
      <Cloud2
        style={[styles.cloudIcon2, styles.iconLayout]}
        resizeMode="cover"
      />
      <Cloud3
        style={[styles.cloudIcon3, styles.iconLayout]}
        resizeMode="cover"
      />
      <Cloud4
        style={[styles.cloudIcon4, styles.iconLayout]}
        resizeMode="cover"
      />
      <Cloud5
        style={[styles.cloudIcon5, styles.iconLayout]}
        resizeMode="cover"
      />
      <View style={styles.kidsFont}>
        <Text style={[styles.text6, styles.textTypo]}>KIDS</Text>
        <Text style={[styles.text7, styles.textTypo]}>KIDS</Text>
        <Text style={[styles.text8, styles.textTypo]}>KIDS</Text>
        <Text style={[styles.text9, styles.textTypo, styles.text9Position]}>
          KIDS
        </Text>
      </View>
      <View style={styles.storyFont}>
        <Text style={[styles.text6, styles.textTypo]}>STORIES</Text>
        <Text style={[styles.text7, styles.textTypo]}>STORIES</Text>
        <Text style={[styles.text8, styles.textTypo]}>STORIES</Text>
        <Text style={[styles.text9, styles.textTypo, styles.text9Position]}>
          STORIES
        </Text>
      </View>
      <View style={styles.button}>
        <Button onPress={() => navigation.navigate('AllStories')} />
      </View>
      <Boy style={[styles.boyIcon, styles.iconLayout]} resizeMode="cover" />
      <Parachute
        style={[styles.homeItem, styles.text9Position]}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
  },
  home: {
    backgroundColor: Color.white,
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
  },
  rainbowIcon: {
    height: '35.36%',
    width: '76.28%',
    top: '2.69%',
    right: '0%',
    bottom: '60.16%',
    left: '20.74%',
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  grassIcon: {
    top: 578,
    width: '100%',
    height: 151,
  },
  buttonChildPosition: {
    left: 0,
    position: 'absolute',
  },
  cloudIcon1: {
    height: '3.83%',
    width: '24.22%',
    top: '1.18%',
    right: '0.43%',
    bottom: '94.99%',
    left: '70.35%',
    position: 'absolute',
  },
  cloudIcon2: {
    height: '4.09%',
    width: '32.66%',
    top: '25.32%',
    right: '25.94%',
    bottom: '70.59%',
    left: '41.4%',
    position: 'absolute',
  },
  cloudIcon3: {
    height: '7.19%',
    width: '39.9%',
    top: '31.22%',
    right: '58.7%',
    bottom: '61.59%',
    left: '1.4%',
    position: 'absolute',
  },
  cloudIcon5: {
    height: '5.81%',
    width: '18.11%',
    top: '53.33%',
    right: '81.89%',
    bottom: '40.86%',
    left: '0%',
    position: 'absolute',
  },
  cloudIcon4: {
    height: '31.03%',
    width: '30.32%',
    top: '32.83%',
    right: '-1.02%',
    bottom: '36.14%',
    left: '70.7%',
    position: 'absolute',
  },
  kidsFont: {
    top: 345,
    left: 98,
    width: 294,
    height: 86,
    position: 'absolute',
  },
  text4FlexBox: {
    textAlign: 'center',
    position: 'absolute',
  },
  boyIcon: {
    height: '21.75%',
    width: '35.85%',
    top: '69%',
    right: '32.52%',
    bottom: '7.33%',
    left: '31.63%',
    position: 'absolute',
  },
  homeItem: {
    height: '30.43%',
    width: '48.37%',
    right: '51.16%',
    bottom: '69.57%',
    left: '0.47%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  storyFont: {
    top: 427,
    left: 38,
    width: 351,
    height: 86,
    position: 'absolute',
  },
  text6: {
    top: '12.93%',
    left: '18.2%',
    fontSize: 57,
    color: Color.color04,
    position: 'absolute',
  },
  text7: {
    top: '8.62%',
    left: '17.07%',
    fontSize: 59,
    color: Color.color03,
    position: 'absolute',
  },
  text8: {
    top: '4.31%',
    left: '16.14%',
    fontSize: 61,
    color: Color.color02,
    position: 'absolute',
  },
  text9: {
    left: '15.01%',
    fontSize: 63,
    lineHeight: 63,
    textAlign: 'center',
    fontFamily: FontFamily.modakRegular,
    color: Color.color01,
  },
  textTypo: {
    lineHeight: 73,
    textAlign: 'center',
    fontFamily: FontFamily.modakRegular,
  },
  text9Position: {
    top: '0%',
    position: 'absolute',
  },
  button: {
    height: '4.29%',
    width: '31.8%',
    top: '61.7%',
    right: '35.87%',
    bottom: '34.02%',
    left: '32.33%',
    position: 'absolute',
  },
  buttonChild: {
    width: 138,
    height: 43,
    top: 0,
  },
  letsGo: {
    top: 7,
    left: 40,
    fontSize: 18,
    letterSpacing: -0.6,
    lineHeight: 25,
    fontFamily: FontFamily.lilitaOneRegular,
    color: Color.gray,
    textShadowColor: '#080206',
    textShadowOffset: {
      width: 0,
      height: 1.4664461612701416,
    },
    textShadowRadius: 0,
  },
});

export default Home;
