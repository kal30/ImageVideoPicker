import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";

import { ImageOrVideoPicker } from "./components/ImageOrVideoPicker";

export default function App() {
  //const [newMessageToAdd, setNewMessageToAdd] = useState("");
  function sendToDB(image) {
    console.log("send to database");
    console.log(image.uri);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageOrVideoPicker onConfirm={sendToDB} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal", // "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 100,
    // marginTop: 100,
  },
});
