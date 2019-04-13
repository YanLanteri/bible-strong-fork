import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as BibleActions from '~redux/modules/bible'
import BibleSelectTabNavigator from '~navigation/BibleSelectTabNavigator'

import Container from '~common/ui/Container'
import Header from '~common/Header'
@connect(
  null,
  BibleActions
)
class BibleSelect extends Component {
  static router = BibleSelectTabNavigator.router

  componentDidMount () {
    const { resetTempSelected } = this.props
    resetTempSelected()
  }

  render () {
    const { navigation } = this.props
    return (
      <Container>
        <Header hasBackButton noBorder title='Références' />
        <BibleSelectTabNavigator
          screenProps={{ mainNavigation: navigation }}
          navigation={navigation}
        />
        {/* <SelectorButtons /> */}
      </Container>
    )
  }
}

export default BibleSelect