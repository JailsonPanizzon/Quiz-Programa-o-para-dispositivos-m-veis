  
import { createStackNavigator } from "react-navigation";
import Pergunta from "./Views/Pergunta";

export default createStackNavigator(
  {
    Pergunta
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#F8F220"
      },
      headerTintColor: "#22DF22"
    }
  }
);