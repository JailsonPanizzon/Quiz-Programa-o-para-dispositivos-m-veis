import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import { ScreenOrientation } from 'expo';
import { changeScreenOrientation } from "./src/resources/function";


export default class App extends React.Component {

  render() {
    changeScreenOrientation()
    return <Routes />;
  }
}