import React, { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';
import recipesApi from '../api/recipesApi';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
// import * as Speech from 'expo-speech';
import '../assets/icon.png';

const CookProcess = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [recoding, setRecoding] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [cookProcess, setCookProcess] = useState();
  const [result, setResult] = useState('');

  const getCookProcess = async () => {
    const res = await recipesApi.getCooking();
    setCookProcess(res.data);
  };

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

  useEffect(() => {
    getCookProcess();
  }, []);

  return (
    cookProcess && (
      <View>
        <View>
          <Text>count：{count}</Text>
          <Image
            style={styles.recipiContainer}
            source={{ uri: cookProcess[count].completedDishImage }}
          />
          <Image
            style={styles.recipiContainer}
            source={{ uri: cookProcess[count].imagePath }}
          />
        </View>
        <View style={styles.processContainer}>
          <Text>{cookProcess[count].text}</Text>
          <Image
            style={styles.processPic}
            source={{ uri: cookProcess[count].imagePath }}
          />
        </View>
        <View style={styles.viewControl}>
          {/* <Button title="Press to hear some words" onPress={speak} /> */}
          {/* <Button title="前へ" onPress={beforeProcess} />
          <Button title="次へ" onPress={afterProcess} /> */}
          <Button title="録音" onPress={startRecoding} />
          <Button title="停止" onPress={stopRecoding} />
        </View>
      </View>
    )
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
    width: 200,
    height: 200,
  },
  processContainer: {
    marginTop: 50,
  },
});

export default CookProcess;
