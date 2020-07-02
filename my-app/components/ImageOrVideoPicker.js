import React, { useState, useEffect } from "react";

import { IVPicker } from "./IVPicker";
import { Previewer } from "./Previewer";
import { Props } from "react-native-image-zoom-viewer/built/image-viewer.type";

export function ImageOrVideoPicker(props) {
  const [imageOrVideo, setImageOrVideo] = useState(null);

  async function send(image) {
    console.log("ImageOrVideoPicker " + image);
    //Send to database from here
    props.onConfirm(image);
  }

  function cancel() {
    console.log("ImageOrVideoPicker Cancelling");
  }

  function receive(iOrV) {
    setImageOrVideo(iOrV);
  }

  return (
    <>
      <IVPicker onPick={receive} />
      <Previewer source={imageOrVideo} onConfirm={send} />
    </>
  );
}
