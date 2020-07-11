import { Model, createKey } from "@blink-mind/core";
import firebase from'firebase';


export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

var firebaseConfig = {
  apiKey: "AIzaSyCdsNkvFQri5hSfj3rYRLCmdacwDNy_ZGk",
  authDomain: "test-39d67.firebaseapp.com",
  databaseURL: "https://test-39d67.firebaseio.com",
  projectId: "test-39d67",
  storageBucket: "test-39d67.appspot.com",
  messagingSenderId: "102128201129",
  appId: "1:102128201129:web:a83ff84aa66541d22ae8b8",
  measurementId: "G-HSYCCHDV74"
};
firebase.initializeApp(firebaseConfig);  
  var db=firebase.database();
export function exportToFirebase (data){
  db.ref("/").set(data);
};

export function generateSimpleModel() {
  const rootKey = createKey();

  return Model.create({
    rootTopicKey: rootKey,
    topics: [
      {
        key: rootKey,
        blocks: [{ type: "CONTENT", data: "MainTopic" }]
      }
    ]
  });
}
