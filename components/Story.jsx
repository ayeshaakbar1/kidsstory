import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Rectangle from '../assets/rectangle.svg';
import BackButton from '../assets/BackButton.svg';
import HomeButton from '../assets/homeButton.svg';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';
import Fold from '../assets/ellipse152.svg';
import Book from '../assets/book.svg';
import Tts from 'react-native-tts';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
  },
  header: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: '#F0F0F0',
  },
  scrollView: {
    padding: 10,
    marginTop: 495,
  },
  back: {
    position: 'absolute',
  },
  backButton: {
    top: 20,
    right: 323,
    position: 'absolute',
  },
  homeButton: {
    top: 20,
    left: 324,
  },
  video: {
    height: '50.32%',
    width: '100.47%',
    right: '-0.47%',
    bottom: '37.47%',
    left: '0%',
    top: '82%',
    position: 'absolute',
  },
  videoLine: {
    top: 380,
    right: 2,
    height: 2,
    width: 428,
    backgroundColor: Color.slateGray,
    borderRadius: 12,
    position: 'absolute',
  },
  videoItem: {
    width: 220,
    top: 88,
  },
  videoItemPosition: {
    height: 286,
    left: 0,
  },
  heading: {
    top: 320,
  },
  theElephantAnd: {
    left: '2.09%',
    fontSize: 24,
    fontFamily: FontFamily.itimRegular,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.white,
    position: 'absolute',
    bottom: 0,
  },
  buttons: {
    top: 403,
    width: 523,
    height: 60,
    left: 8,
    position: 'absolute',
    shadowRadius: 4,
    borderBottomRightRadius: Border.br_55xl,
  },
  textButtons: {
    fontSize: 18,
    fontFamily: FontFamily.itimRegular,
  },
  textButtons2: {
    fontSize: 18,
    fontFamily: FontFamily.itimRegular,
    right: 168,
    top: 34,
  },
  button: {
    backgroundColor: '#EEA812',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#7B3F23',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: '#EEA812',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#7B3F23',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 63,
  },
  button3: {
    backgroundColor: '#EEA812',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#7B3F23',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 126,
  },
  textButton: {
    color: 'white',
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  readButton: {
    right: 17,
    position: 'absolute',
  },
  pageParent: {
    top: 500,
    height: 357,
    width: 378,
    left: 18,
    position: 'absolute',
  },
  pagePosition: {
    width: 378,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  pageChild: {
    borderTopLeftRadius: Border.br_55xl,
    borderTopRightRadius: 100,
    borderBottomRightRadius: Border.br_55xl,
    borderBottomLeftRadius: Border.br_55xl,
    shadowRadius: 4,
    elevation: 4,
    borderColor: '#7E6E9A',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3.081967353820801,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    height: 1219,
  },
  pageItem: {
    top: 3,
    left: 286,
    borderRadius: 11,
    width: 91,
    height: 98,
    position: 'absolute',
  },
  book: {
    top: 259,
    width: 62,
    height: 78,
    transform: [
      {
        rotate: '5.23deg',
      },
    ],
    left: 29,
    position: 'absolute',
  },
  g: {
    top: 268,
    left: 48,
    fontSize: 36,
    width: 28,
    height: 55,
    fontFamily: FontFamily.jomolhariRegular,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.white,
    position: 'absolute',
  },
  forestThereLived: {
    top: 532,
    left: 100,
    width: 197,
    height: 99,
    color: Color.paragraphColor,
    lineHeight: 22,
    letterSpacing: 0.4,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.jomolhariRegular,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    position: 'absolute',
  },
  aGiganticElephant: {
    left: 35,
    height: 99,
  },
  insideTheDeepTypo: {
    lineHeight: 25,
    fontSize: FontSize.size_lgi,
    width: 336,
    color: Color.paragraphColor,
    letterSpacing: 0.4,
    fontFamily: FontFamily.jomolhariRegular,
    alignItems: 'center',
    display: 'flex',
  },
  insideTheDeep: {
    top: 19,
    left: 35,
  },
  text3: {
    top: 38,
    left: 35,
  },
  text4: {
    top: 58,
    left: 35,
  },
  text5: {
    top: 76,
    left: 35,
  },
  text6: {
    top: 90,
    left: 35,
  },
  twoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const content = [
  {
    style: [styles.aGiganticElephant, styles.insideTheDeepTypo],
    msg: 'a gigantic elephant who used to get angry on small issues and he underestimated all the other small animals. He was always doing something to show off his strength',
  },
  {
    style: [styles.insideTheDeep, styles.insideTheDeepTypo],
    msg: 'Inside the deep pole, there lived a tiny ant family. Every morning they would go in search of food. On their way, they would meet the  elephant. The elephant was very naughty and proud of his powerful body. He always troubled all the small animals.',
  },
  {
    style: [styles.text3, styles.insideTheDeepTypo],
    msg: 'One day, when the ant family was off to work, the elephant sprayed a trunk full of water on them.',
  },
  {
    style: [styles.text4, styles.insideTheDeepTypo],
    msg: '“Ouch! You should not hurt others like this!” cried one of the ants. The elephant said angrily, “Oh, you stupid ant! keep quiet or i will crush you to death.” The poor ant kept quiet but she decided to teach the proud elephant a lesson.',
  },
  {
    style: [styles.text5, styles.insideTheDeepTypo],
    msg: 'The ant slowly crept into the elephant’s trunk and started biting him. The elephant became restless. He tried to get the ant out of his trunk but the ant did not come out. Such a big animal but he could not do anything to get the tiny ant out. The elephant shouted in pain but the ant kept biting him.',
  },
  {
    style: [styles.text6, styles.insideTheDeepTypo],
    msg: 'The elephant started to cry and said sorry to the tiny ant. The ant said, “This is how it feels when you hurt others!” The ant took pity on the elephant and came out of his trunk. The elephant was very happy. This is how the elephant learned the lesson of his life. And from the day, he never ever troubled any animal again.',
  },
];
const Story = ({navigation}) => {
  const [reading, setReading] = React.useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordedFilePath, setRecordedFilePath] = useState('');
  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;

  const speak = () => {
    if (reading) {
      setReading(false);
      Tts.stop();
    } else {
      setReading(true);
      for (const item of content) {
        Tts.speak(item.msg);
      }
      setReading(true);
    }
  };

  const startRecording = async () => {
    try {
      setIsRecording(true);
      const path = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener(e => {
        console.log(
          'Recording Time:',
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        );
      });
      setRecordedFilePath(path);
      console.log('Recording started:', path);
    } catch (error) {
      console.error(error);
      setIsRecording(false);
    }
  };

  const stopRecording = async () => {
    try {
      setIsRecording(false);
      const path = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setRecordedFilePath(path);
      console.log('Recording stopped:', path);
    } catch (error) {
      console.error(error);
    }
  };

  const playRecordedAudio = async () => {
    try {
      setIsPlaying(true);
      await audioRecorderPlayer.startPlayer(recordedFilePath);
      audioRecorderPlayer.addPlayBackListener(e => {
        if (e.current_position === e.duration) {
          setIsPlaying(false);
          audioRecorderPlayer.stopPlayer();
        }
      });
      console.log('Playing recorded audio...');
    } catch (error) {
      console.error(error);
    }
  };

  const stopPlayback = async () => {
    try {
      setIsPlaying(false);
      await audioRecorderPlayer.stopPlayer();
      console.log('Playback stopped.');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Rectangle style={styles.back} />
        <BackButton
          style={styles.backButton}
          onPress={() => navigation.navigate('AllStories')}
        />
        <HomeButton
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        />
        <View style={styles.video}>
          <View style={styles.videoLine} />
          <VideoPlayer
            video={require('../assets/video/animals.mp4')}
            videoWidth={1600}
            videoHeight={900}
            thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
            showDuration={true}
            pauseOnPress={true}
            repeat={true}
            autoplay={true}
            disableControlsAutoHide={true}
            disableHardwareAcceleration
          />
        </View>
        <View style={styles.heading}>
          <Text style={styles.theElephantAnd}>The Elephant And The Ant</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.twoButtons}>
            <TouchableOpacity
              onPress={isRecording ? stopRecording : startRecording}
              style={styles.button}>
              <Icon
                name={isRecording ? 'stop-circle' : 'mic'}
                size={24}
                color={isRecording ? 'red' : 'white'}
              />
              <Text style={styles.textButton}>Record</Text>
            </TouchableOpacity>

            {recordedFilePath && (
              <TouchableOpacity
                onPress={isPlaying ? stopPlayback : playRecordedAudio}
                style={styles.button2}>
                <Icon
                  name={isPlaying ? 'stop-circle' : 'play'}
                  size={24}
                  color={isPlaying ? 'red' : 'white'}
                />
                {/* {recordedFilePath && ( */}
                <Text style={[styles.textButton]}>
                  {isRecording ? 'Recording...' : 'Recorded Audio'}
                </Text>
                {/* // )} */}
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={speak} style={styles.button3}>
              <Icon
                name={setReading ? 'stop-circle' : 'circle'}
                size={24}
                color={reading ? 'red' : 'white'}
              />
              <Text style={styles.textButton}>Read</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pageParent}>
          <View style={styles.pagePosition}>
            <View style={[styles.pageChild, styles.pagePosition]} />
            <Fold style={styles.pageItem} />
          </View>
        </View>
        <View style={styles.book}>
          <Book style={[styles.book]} resizeMode="cover" />
          <Text style={styles.g}>G</Text>
        </View>
        <Text style={styles.forestThereLived}>
          {
            'reen forest.There lived many wild animals. In this jungle, there lived '
          }
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {content.map((item, index) => {
          return (
            <Text key={index} style={item.style}>
              {item.msg}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Story;
