import React from "react";
import { View } from "react-native";
import CalendarView from "../components/CalendarView";

const CalendarScreen = ({ navigation }) => {
  return (
    <View>
      <CalendarView navigation={navigation} />
    </View>
  );
};

export default CalendarScreen;
