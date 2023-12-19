import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Voice() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Todoアプリ</Text> */}
      <Text style={styles.title}>todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    backgroundColor: "red",
    fontWeight: "bold",
    marginTop: 80,
    //     marginBottom: 20,
  },
  item: {
    width: 300,
    backgroundColor: "yellow",
    marginBottom: 30,
    alignItems: "center",
    padding: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  deleteView: {
    width: 50,
    backgroundColor: "gray",
  },
  deleteText: {
    color: "#fff",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
  },
});
