import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Bookmarks() {
  return (
    <View style={styles.container}>
      <Text>Bootmarks</Text>
    </View>
  );
}

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
