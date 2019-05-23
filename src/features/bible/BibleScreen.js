import React from 'react'
import { connect } from 'react-redux'
import { StatusBar } from 'react-native'

import Container from '~common/ui/Container'
import BibleViewer from './BibleViewer'
import BibleHeader from './BibleHeader'
import BibleParamsModal from './BibleParamsModal'

import * as BibleActions from '~redux/modules/bible'
import * as UserActions from '~redux/modules/user'

@connect(
  ({ bible, user }, ownProps) => {
    const params = ownProps.navigation.state.params
    return {
      isReadOnly: params && params.isReadOnly,
      settings: user.bible.settings,
      app: {
        book: (params && params.book) || bible.selectedBook,
        chapter: (params && params.chapter) || bible.selectedChapter,
        verse: (params && params.verse) || bible.selectedVerse,
        version: (params && params.version) || bible.selectedVersion
      }
    }
  },
  { ...BibleActions, ...UserActions }
)
class BibleScreen extends React.Component {
  state = {
    isBibleParamsOpen: false
  }

  toggleBibleParamsOpen = () => {
    this.setState({ isBibleParamsOpen: !this.state.isBibleParamsOpen })
  }
  render () {
    const {
      app,
      navigation,
      isReadOnly,
      setSettingsAlignContent,
      setSettingsTextDisplay,
      increaseSettingsFontSizeScale,
      decreaseSettingsFontSizeScale,
      settings
    } = this.props

    const { arrayVerses } = this.props.navigation.state.params || {}

    return (
      <Container>
        <StatusBar translucent backgroundColor='white' barStyle='dark-content' />
        <BibleHeader
          isReadOnly={isReadOnly}
          book={app.book}
          chapter={app.chapter}
          verse={app.verse}
          version={app.version}
          onBibleParamsClick={this.toggleBibleParamsOpen}
          isBible
        />
        <BibleViewer
          isReadOnly={isReadOnly}
          arrayVerses={arrayVerses}
          book={app.book}
          chapter={app.chapter}
          verse={app.verse}
          version={app.version}
          navigation={navigation}
          settings={settings}
        />
        <BibleParamsModal
          onClosed={this.toggleBibleParamsOpen}
          isOpen={this.state.isBibleParamsOpen}
          setSettingsAlignContent={setSettingsAlignContent}
          setSettingsTextDisplay={setSettingsTextDisplay}
          increaseSettingsFontSizeScale={increaseSettingsFontSizeScale}
          decreaseSettingsFontSizeScale={decreaseSettingsFontSizeScale}
          settings={settings}
        />
      </Container>
    )
  }
}

export default BibleScreen
