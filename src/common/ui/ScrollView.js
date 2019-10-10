import React from 'react'
import styled from '@emotion/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const ScrollView = styled.ScrollView(({ theme }) => ({
  backgroundColor: theme.colors.reverse,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30
}))

export default ({ children, contentContainerStyle, ...props }) => (
  <ScrollView
    {...props}
    contentContainerStyle={{
      paddingTop: 20,
      paddingBottom: 10 + getBottomSpace(),
      ...contentContainerStyle
    }}>
    {children}
  </ScrollView>
)
