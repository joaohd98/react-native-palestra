import {Colors} from "../theme/colors";
import {createStackNavigator} from "react-navigation-stack";

export const CreateStackNavigator = (stacks: {name: string, page: Function}[]) => {

  let routes: any = [];

  stacks.forEach(stack => routes[stack.name] = stack.page);


  return createStackNavigator(routes, {
    headerLayoutPreset: "center",
    defaultNavigationOptions:  {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: Colors.gray,
        borderBottomWidth: .5,
      },
      headerTitleStyle: {
        textAlign: "center",
        fontWeight: "400",
        color: Colors.gray,
        fontSize: 20,
        lineHeight: 50,
        letterSpacing: 4,
        textTransform: "none",
        alignSelf: "center"
      },
      headerRightContainerStyle: {
        right: 20,
      },
      headerLeftContainerStyle: {
        left: 20,
      },
    }
  });

};
