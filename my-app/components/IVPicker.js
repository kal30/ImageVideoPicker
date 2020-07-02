import React from "react";
import { TouchableOpacity } from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";
import { FontAwesome } from "@expo/vector-icons";

export function IVPicker(props) {
  // Assuming Permission exists
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // pass result up to parent
      props.onPick({
        uri: result.uri,
        FileMimeType: mime.lookup(result.uri),
      });
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <FontAwesome name="file-image-o" size={50} color="#1E6738" />
    </TouchableOpacity>
  );
}
