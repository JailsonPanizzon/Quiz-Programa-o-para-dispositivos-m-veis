  
import { createStackNavigator } from "react-navigation";
import Pergunta from "./Views/Pergunta";

export default createStackNavigator(
  {
    Pergunta
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0011ff"
      },
      headerTintColor: "#ffffff"
    }
  }
);