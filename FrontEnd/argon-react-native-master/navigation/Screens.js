import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
//import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import Scanimg from "../screens/Camera";
import LogFoodSearch from "../screens/LogFoodSearch";
import NutritionSum from "../screens/NutritionSum";
import Viewprofile from "../screens/Viewprofile";

// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1],
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  },
});

const ElementsStack = createStackNavigator(
  {
    Elements: {
      screen: Elements,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Elements" navigation={navigation} />,
      }),
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE",
    },
    transitionConfig,
  }
);
const ViewStack = createStackNavigator(
  {
    Viewprofile: {
      screen: Viewprofile,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Viewprofile" navigation={navigation} />,
      }),
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE",
    },
    transitionConfig,
  }
);

const ArticlesStack = createStackNavigator(
  {
    Articles: {
      screen: Articles,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Articles" navigation={navigation} />,
      }),
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE",
    },
    transitionConfig,
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
            white
            transparent
            title="Profile"
            iconColor={"#FFF"}
            navigation={navigation}
          />
        ),
        headerTransparent: true,
      }),
    },
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig,
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Home" navigation={navigation} />,
      }),
    },
    // Pro: {
    //   screen: Pro,
    //   navigationOptions: ({ navigation }) => ({
    //     header: (
    //       <Header left={<Block />} white transparent title="" navigation={navigation} />
    //     ),
    //     headerTransparent: true
    //   })
    // }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE",
    },
    transitionConfig,
  }
);

const LogFoodSearchStack = createStackNavigator({
  LogFoodSearch: {
    screen: LogFoodSearch,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          white
          transparent
          title="LogFoodSearch"
          iconColor={"#FFF"}
          navigation={navigation}
        />
      ),
      headerTransparent: true,
    }),
  },
});

const NutritionSumStack = createStackNavigator(
  {
    NutritionSum: {
      screen: NutritionSum,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
            white
            transparent
            title="Nutrition Summary"
            iconColor={"#333"}
            navigation={navigation}
          />
        ),
        headerTransparent: true,
      }),
    },
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig,
  }
);

const ScanimgStack = createStackNavigator(
  {
    Scanimg: {
      screen: Scanimg,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
            white
            transparent
            title="Scan Image"
            iconColor={"#333"}
            navigation={navigation}
          />
        ),
        headerTransparent: true,
      }),
    },
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig,
  }
);

//
const AppStack = createDrawerNavigator(
  //creates screens stack order
  {
    Home: {
      screen: HomeStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Home" />
        ),
      }),
    },
    // Profile: {
    //   screen: ProfileStack,
    //   navigationOptions: (navOpt) => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Profile" title="Profile" />
    //     ),
    //   }),
    // },
    Viewprofile: {
      screen: Viewprofile,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Viewprofile" title="Viewprofile" />
        ),
      }),
    },
    Account: {
      screen: Register,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Account" />
        ),
      }),
    },
    // Elements: {
    //   screen: ElementsStack,
    //   navigationOptions: (navOpt) => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Elements" title="Elements" />
    //     ),
    //   }),
    // },
    LogFoodSearch: {
      screen: LogFoodSearchStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem
            focused={focused}
            screen="LogFoodSearch"
            title="Search Food Log"
          />
        ),
      }),
    },
    NutritionSum: {
      screen: NutritionSumStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem
            focused={focused}
            screen="NutritionSum"
            title="Nutrition Summary"
          />
        ),
      }),
    },
    Scanimg: {
      screen: ScanimgStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Scanimg" title="Scan Image" />
        ),
      }),
    },
    // Articles: {
    //   screen: ArticlesStack,
    //   navigationOptions: (navOpt) => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Articles" title="Articles" />
    //     ),
    //   }),
    // },
  },
  Menu
);

const AuthStack = createSwitchNavigator({ SignIn: Onboarding });

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "AuthLoading",
    }
  )
);
export default AppContainer;
