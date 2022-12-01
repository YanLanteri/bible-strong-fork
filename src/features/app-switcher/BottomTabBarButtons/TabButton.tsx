import React from 'react'
import { AnimatedBox, TouchableBox } from '~common/ui/Box'
import Text from '~common/ui/Text'
import { TAB_ICON_SIZE } from '../utils/constants'
import useTabButtonPress from './useTabButtonPress'

export interface TabButtonProps {}

const TabButton = ({}: TabButtonProps) => {
  const { onPress, tabsLength, iconStyle } = useTabButtonPress()
  return (
    <TouchableBox center size={TAB_ICON_SIZE} onPress={onPress}>
      <AnimatedBox
        size={20}
        borderWidth={2}
        borderColor="tertiary"
        borderRadius={3}
        center
        style={iconStyle}
      >
        <Text fontSize={12} color="tertiary">
          {tabsLength}
        </Text>
      </AnimatedBox>
    </TouchableBox>
  )
}

export default TabButton
