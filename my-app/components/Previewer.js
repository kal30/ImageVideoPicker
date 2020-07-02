import React, { useState, useEffect } from "react";
import { Modal, TouchableOpacity, StyleSheet } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export function Previewer(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.source) setVisible(true);
  }, [props.source]);

  function confirm() {
    console.log("Previewer Confirming");
    setVisible(false);
    props.onConfirm(props.source);
  }

  async function cancel() {
    console.log(" Previewer Cancelling");
    setVisible(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
  }

  if (props.source) {
    const images = [{ url: props.source.uri }];
    return (
      <Modal visible={visible} transparent={true}>
        <ImageViewer
          enableSwipeDown={true}
          imageUrls={images}
          renderIndicator={() => {}}
        />
        <TouchableOpacity onPress={confirm} style={styles.sendButton}>
          <MaterialCommunityIcons name="send-circle" size={30} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={cancel} style={styles.closeButton}>
          <MaterialCommunityIcons
            name="close-circle"
            size={30}
            color="orange"
          />
        </TouchableOpacity>
      </Modal>
    );
  }
  return <></>;
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 35,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    zIndex: 2,
  },
  sendButton: {
    position: "absolute",
    bottom: 45,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    zIndex: 2,
  },
});
