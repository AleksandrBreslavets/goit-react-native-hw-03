import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { RegistartionScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';
import { useFonts } from "expo-font";
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';

const App = () => {
  const [fontsLoaded]=useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require("./src/img/Photo_BG.jpg")} resizeMode="cover" style={styles.backgroundImage}>
          {/* <RegistartionScreen /> */}
          <LoginScreen />
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default App;

