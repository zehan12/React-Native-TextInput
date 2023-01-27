import React, { useState } from "react";
import { Button, TextInput, StyleSheet, Text, View } from "react-native";

function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.app}>
      <View style={{ padding: 15 }}>
        <TextInput
          style={{ height: 50 }}
          placeholder="Enter name"
          onChangeText={(name) => setText(name)}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 30 }}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
