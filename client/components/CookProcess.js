// import React from "react";
import React, { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
// import * as Speech from 'expo-speech';
import '../assets/icon.png';

let process = [
  {
    recipiName: '味噌汁',
    recipiPic: '../assets/icon.png',
    process: '豆腐を切ります',
    processPic: '../assets/icon.png',
  },
  {
    recipiName: '鶏肉の照り焼き',
    recipiPic: '../assets/icon.png',
    process: '鶏肉を切ります',
    processPic: '../assets/icon.png',
  },
  {
    recipiName: '鯖の味噌煮',
    recipiPic: '../assets/icon.png',
    process: '鶏肉を切ります',
    processPic: '../assets/icon.png',
  },
  {
    recipiName: '鯖の味噌煮',
    recipiPic: '../assets/icon.png',
    process: 'ページ変わりました',
    processPic: '../assets/icon.png',
  },
];

const CookProcess = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [recoding, setRecoding] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [result, setResult] = useState('');

  const speechStartHandler = (e) => {
    console.log('speech start');
  };

  const speechEndHandler = (e) => {
    setRecoding(false);
    console.log('speech end');
  };

  const speechResultsHandler = (e) => {
    console.log('voice enent: ', e);
    const text = e.value[0];
    if (text.includes('次')) {
      console.log('next');
      setCount(count + 1);
      // setResult('');
    } else if (result.includes('前')) {
      setCount(count - 1);
      setResult('');
    }
    // setResult(text);
  };

  const speechErrorHandler = (e) => {
    console.log('speech error', e);
  };

  const startRecoding = async () => {
    setRecoding(true);
    try {
      await Voice.start('ja-JP');
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const stopRecoding = async () => {
    try {
      await Voice.stop();
      setRecoding(false);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;
    startRecoding();
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // if (result.includes('次')) {
  //   setCount(count + 1);
  //   setResult('');
  // } else if (result.includes('前')) {
  //   setCount(count - 1);
  //   setResult('');
  // } else if (result.includes('関西')) {
  //   stopRecoding();
  //   setResult('');
  // }

  // useEffect(() => {
  //   console.log('start');
  //   startRecoding;
  // }, []);

  console.log('result :', result);
  // const speak = () => {
  //   const thingToSay = '豆腐を切って下さい';
  //   Speech.speak(thingToSay);
  // };

  const beforeProcess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const afterProcess = () => {
    if (process.length > count) {
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.recipiContainer}>
        <Text>{process[count].recipiName}</Text>
        <Text>count：{count}</Text>
        <Image
          style={styles.recipiPic}
          source={require('../assets/icon.png')}
        />
      </View>
      <View style={styles.processContainer}>
        <Text>{process[count].process}</Text>
        <Image
          style={styles.processPic}
          source={require('../assets/icon.png')}
        />
      </View>
      <View style={styles.viewControl}>
        {/* <Button title="Press to hear some words" onPress={speak} /> */}
        <Button title="前へ" onPress={beforeProcess} />
        <Button title="次へ" onPress={afterProcess} />
        <Button title="録音" onPress={startRecoding} />
        <Button title="停止" onPress={stopRecoding} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  recipiContainer: {
    marginTop: 10,
    backgroundColor: 'green',
  },
  processContainer: {
    marginTop: 50,
  },
  recipiPic: {
    width: 100,
    height: 100,
  },
  processPic: {
    width: 200,
    height: 200,
  },
  viewControl: {
    marginTop: 20,
  },
});

export default CookProcess;
