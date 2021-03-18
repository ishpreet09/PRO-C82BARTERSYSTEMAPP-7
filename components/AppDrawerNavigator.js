import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { TabNavigator } from './AppTabNavigator';
import SettingScreen from '../screens/settingsScreen';
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
    Donations:{
      screen:MyDonationScreen
    },
    Setting:{
      screen : SettingScreen

    }
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
