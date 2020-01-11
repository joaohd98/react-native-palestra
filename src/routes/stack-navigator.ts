import {Colors} from "../theme/colors";
import {createStackNavigator} from "react-navigation-stack";

export const CreateStackNavigator = (pages: Function[]) => {

  const routes: { [key: string]: any } = {};

  pages.forEach(page => routes[page.name] = page);

  return createStackNavigator(routes, {
    headerLayoutPreset: "center",
    defaultNavigationOptions:  {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: Colors.gray,
        borderBottomWidth: .5,
      },
      headerTitleContainerStyle: {
        right: 50,
        left: 50
      },
      headerTitleStyle: {
        textAlign: "center",
        fontWeight: "400",
        color: Colors.gray,
        fontSize: 20,
        lineHeight: 50,
        letterSpacing: 4,
        textTransform: "capitalize",
        alignSelf: "center"
      },
      headerRightContainerStyle: {
        right: 15
      }
    }
  });

};
