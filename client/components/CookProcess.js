import React, { useEffect, useState } from "react";
import Voice from "@react-native-voice/voice";
import recipesApi from "../api/recipesApi";
import { View, Text, StyleSheet, Button, Image, Alert } from "react-native";
import * as Speech from "expo-speech";
import "../assets/icon.png";
import { useNavigation } from "@react-navigation/native";

const CookProcess = ({ route }) => {
  const [count, setCount] = useState(0);
  const [recoding, setRecoding] = useState(false);
  const [cookProcess, setCookProcess] = useState();
  const [result, setResult] = useState("");
  const useNavigate = useNavigation();
  const token = route.params.token;

  const getCookProcess = async () => {
    try {
      const res = await recipesApi.getCooking(token);
      setCookProcess(res.data);
      Speech.speak(res.data[0].text);
    } catch (e) {
      Alert.alert("セッションが切れました\n再度ログインしてください");
      useNavigate.navigate("ログイン");
      console.error("Recipes", e);
    }
  };

  const speechStartHandler = (e) => {
    console.log("speech start");
  };

  const speechEndHandler = (e) => {
    setRecoding(false);
    console.log("speech end");
  };

  const speechResultsHandler = (e) => {
    const text = e.value[0];
    setResult(text);
  };

  const speechErrorHandler = (e) => {
    console.log("speech error", e);
  };

  const startRecoding = async () => {
    setRecoding(true);
    try {
      await Voice.start("ja-JP");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const stopRecoding = async () => {
    try {
      await Voice.stop();
      setRecoding(false);
    } catch (error) {
      console.log("error: ", error);
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

  useEffect(() => {
    if (result.slice(-1) === "次" && count < cookProcess.length - 1) {
      setCount(count + 1);
      Speech.speak(cookProcess[count + 1].text);
    }
    if (result.slice(-1) === "前" && count >= 0) {
      setCount(count - 1);
      Speech.speak(cookProcess[count - 1].text);
    }
  }, [result]);

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
          {/* <Button title="録音" onPress={startRecoding} />
          <Button title="停止" onPress={stopRecoding} /> */}
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  recipiContainer: {
    marginTop: 10,
    backgroundColor: "green",
    width: 200,
    height: 200,
  },
  processContainer: {
    marginTop: 50,
  },
});

export default CookProcess;
