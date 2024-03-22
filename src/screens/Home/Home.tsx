import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import styles from "./Style";
import BatLogo from "../../components/BatLogo/BatLogo";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
