import React, { useEffect, useState } from "react";
import Voice from "@react-native-voice/voice";
import recipesApi from "../api/recipesApi";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
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

  const today = new Date();
  const todayMonth = new Date().getMonth();
  const days = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];
  const getMonth = today.getMonth() + 1;
  const getDate = today.getDate();
  const getDay = days[today.getDay()].slice(0, 1);
  // console.log(days[getDay]);
  const date = `${getMonth}/${getDate}`;
  const getCookProcess = async () => {
    try {
      const res = await recipesApi.getCooking(token);
      setCookProcess(res.data);
      console.log(res.data);
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
    <View>
      {cookProcess && (
        <View style={styles.container}>
          <View style={styles.header_container}>
            <Text style={styles.header_date}>{date}</Text>
            <Text style={styles.header__days_color}>{getDay}</Text>
          </View>
          <View style={styles.cook_container}>
            <View style={styles.timer}>
              <Image
                source={require("../assets/timerIcon.png")}
                style={styles.timerIcon}
              />
              <Text style={styles.timer_text}>
                {`${cookProcess[count].workTime}:00`}
              </Text>
            </View>
            <View>
              <Image
                style={styles.recipe_image}
                source={{ uri: cookProcess[count].imagePath }}
              />
              <Image
                style={styles.complete_image}
                source={{ uri: cookProcess[count].completedDishImage }}
              />
            </View>
            <Text style={styles.recipe_title}>{cookProcess[count].text}</Text>
          </View>
          <View style={styles.process_container}>
            <View>
              <TouchableOpacity
                style={[styles.button, styles.previous_button]}
              />
              <Text style={[styles.button_text, styles.previous_text]}>
                『前』
              </Text>
            </View>
            <Image
              source={require("../assets/micIcon.png")}
              style={styles.micIcon}
            />
            <View>
              <TouchableOpacity style={[styles.button, styles.next_button]} />
              <Text style={[styles.button_text, styles.next_text]}>『次』</Text>
            </View>
          </View>
          <Text style={styles.announce}>
            『次』または『前』と話しかけてください
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FBFBF6",
    paddingBottom: 50,
  },
  header_container: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  header_date: {
    fontSize: 20,
    color: "#002F15",
  },
  header__days_color: {
    color: "#002F15",
  },
  cook_container: {
    backgroundColor: "#FBFBF6",
    alignItems: "center",
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerIcon: {
    width: 20,
    height: 20,
    marginRight: 14,
  },
  timer_text: {
    fontSize: 24,
    color: "#002F15",
  },
  complete_image: {
    position: "absolute",
    bottom: 10,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recipe_image: {
    width: 360,
    height: 400,
    marginTop: 10,
    borderRadius: 10,
  },
  recipe_title: {
    marginLeft: 20,
    marginTop: 5,
    marginRight: 20,
    fontSize: 14,
    fontWeight: "bold",
    color: "#002F15",
  },
  process_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    alignItems: "flex-start",
    borderTopColor: "transparent",
    borderTopWidth: 40,
    borderBottomColor: "transparent",
    borderBottomWidth: 40,
  },
  button_text: {
    position: "absolute",
    top: 30,
    color: "white",
    fontWeight: "bold",
  },
  next_button: {
    borderLeftColor: "#DC661F",
    borderLeftWidth: 60,
  },
  next_text: {
    left: 10,
  },
  previous_button: {
    borderRightColor: "#DC661F",
    borderRightWidth: 60,
  },
  previous_text: {
    right: 10,
  },
  micIcon: {
    width: 60,
    height: 60,
    marginRight: 40,
    marginLeft: 40,
  },
  announce: {
    color: "#002F15",
  },
});

export default CookProcess;
