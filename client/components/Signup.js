import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Signup = ({ navigation }) => {
  return (
    //   <Text>signup</Text>
    <View style={styles.container}>
      <Button
        styles={styles.button}
        title="名前、メール、パス、アレルギー入れたら"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Signup;
