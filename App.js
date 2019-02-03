import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Constants, SMS } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "9253211248"
    };
  }

  onPress = async () => {
    const status = await SMS.sendSMSAsync(this.state.phoneNumber, "");

    console.log(status);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.stylebutton} onPress={this.onPress}>
          <Text style={styles.textprop}>✆</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center"
  },
  stylebutton: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    backgroundColor: "rgba(163,172,172,0.6)"
  },
  textprop: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center"
  }
});
