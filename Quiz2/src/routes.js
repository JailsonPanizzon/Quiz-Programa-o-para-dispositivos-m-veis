import { createStackNavigator } from "react-navigation";
import Pergunta from "./Views/Pergunta";
import Categorias from "./Views/Categorias";

export default createStackNavigator(
  {
    Pergunta,
    Categorias
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
