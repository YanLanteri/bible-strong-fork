import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { AnimatedBox } from '~common/ui/Box'
import BibleButton from '../BottomTabBarButtons/BibleButton'
import HomeButton from '../BottomTabBarButtons/HomeButton'
import MenuButton from '../BottomTabBarButtons/MenuButton'
import SearchButton from '../BottomTabBarButtons/SearchButton'
import TabButton from '../BottomTabBarButtons/TabButton'
import useBottomBarStyles from './useBottomTabBarStyles'

const BottomTabBar = () => {
  const { style } = useBottomBarStyles()
  return (
    <AnimatedBox
      row
      pb={getBottomSpace()}
      bg="reverse"
      px={20}
      alignItems="center"
      justifyContent="space-around"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      borderTopWidth={1}
      borderColor="border"
      style={style}
    >
      <HomeButton />
      <SearchButton />
      <BibleButton />
      <TabButton />
      <MenuButton />
    </AnimatedBox>
  )
}

export default BottomTabBar
