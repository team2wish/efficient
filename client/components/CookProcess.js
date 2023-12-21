import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import recipesApi from '../api/recipesApi';
import * as Speech from 'expo-speech';
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
];
const imgPathArr = [
  'aeru-abocado-tomato',
  '../assets/testRecipeImg/aeru-comatsuna-jako.png',
];

const CookProcess = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [cookProcess, setCookProcess] = useState();
  const [imgPath, setImgPath] = useState('');

  const getCookProcess = async () => {
    const res = await recipesApi.getCooking();
    setCookProcess(res.data);
    // setImgPath(cookProcess[count].imagePath);
  };

  useEffect(() => {
    getCookProcess();
  }, []);

  const speak = () => {
    const thingToSay = '豆腐を切って下さい';
    Speech.speak(thingToSay);
  };

  const beforeProcess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const afterProcess = () => {
    if (cookProcess.length > count) {
      setCount(count + 1);
    }
  };

  // {"completedDishImage": "gohan.jpeg", "imagePath": "../assets/testRecipeImg/rice_wash.jpeg", "name": "ご飯", "text": "米を研ぎ、炊飯する。", "workTime": 35}

  return (
    cookProcess && (
      <View style={styles.container}>
        <View style={styles.recipiContainer}>
          <Text>{cookProcess[count].name}</Text>
          <Text>count：{count}</Text>
          {/* <Image
            style={styles.recipiPic}
            source={require(cookProcess[count].imagePath)}
          /> */}

          {/* {console.log('cookProcess :', cookProcess[count])}
          {console.log('==============')}
          {console.log('imgPath :', cookProcess[count].imagePath)} */}
          {console.log('imgPathArr :', imgPathArr[0])}
        </View>
        <View style={styles.processContainer}>
          <Text>{cookProcess[count].text}</Text>
          {/* <Image
            style={styles.processPic}
            source={require(cookProcess[count].imagePath)}
          /> */}
          {/* <Image style={styles.processPic} source={imgPathArr[0]} /> */}
          <Image style={styles.processPic} source={{ uri: imgPathArr[0] }} />
        </View>
        <View style={styles.viewControl}>
          {/* <Button title="Press to hear some words" onPress={speak} /> */}
          <Button title="前へ" onPress={beforeProcess} />
          <Button title="次へ" onPress={afterProcess} />
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
