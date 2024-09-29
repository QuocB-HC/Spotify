import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome
          style={{ textAlign: "center" }} name="spotify" size={80} color="white"/>
        <Text style={styles.heading}>Milions of Songs free on Spotify.</Text>
      </View>

      <View style={{ height: 80 }}>
        <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
          <View style={styles.freebtn}>
            <Text>Sign up free</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
          <View style={styles.ggbtn}>
            <FontAwesome name="google" size={24} color="white" />
            <Text style={styles.ggbtn_text}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#040309",
  },
  
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 40,
  },

  freebtn: {
      backgroundColor: "#1DB954",
      padding: 10,
      marginLeft: "auto",
      marginRight: "auto",
      width: 300,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
  },

  ggbtn: {
      backgroundColor: "#131624",
      padding: 10,
      marginLeft: "auto",
      marginRight: "auto",
      width: 300,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      marginVertical: 10,
      borderColor: "#C0C0C0",
      borderWidth: 0.8,
  },

  ggbtn_text: {
      //fontWeight: 500,
      color: "white",
      textAlign: "center",
      flex: 1,
  }
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
