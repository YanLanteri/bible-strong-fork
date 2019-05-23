import { Component, h } from 'preact'
import picostyle from 'picostyle'

import { getColors } from '../../../../themes/getColors'
import { SEND_INITIAL_DATA } from './dispatch'
import Verse from './Verse'
const styled = picostyle(h)

const Container = styled('div')(({ settings: { alignContent, theme } }) => ({
  maxWidth: '320px',
  width: '100%',
  margin: '0 auto',
  textAlign: alignContent,
  background: getColors[theme].reverse,
  color: getColors[theme].default
}))
class VersesRenderer extends Component {
  state = {
    verses: [],
    selectedVerses: {},
    highlightedVerses: {},
    settings: {}
  }

  componentDidMount () {
    this.receiveDataFromApp()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState && prevState.settings.theme !== this.state.settings.theme) {
      document.body.style.backgroundColor = getColors[this.state.settings.theme].reverse
    }
  }

  receiveDataFromApp = () => {
    const self = this
    document.addEventListener('message', (message) => {
      const response = JSON.parse(message.data)

      switch (response.type) {
        case SEND_INITIAL_DATA: {
          const { verses, selectedVerses, highlightedVerses, settings } = response
          self.setState({
            verses,
            selectedVerses,
            highlightedVerses,
            settings
          })
          break
        }
      }
    })
  }

  render (props, state) {
    if (!state.verses.length) {
      return null
    }

    return (
      <Container settings={state.settings}>
        {
          state.verses.map((verse) => {
            const { Livre, Chapitre, Verset } = verse
            const isSelected = !!state.selectedVerses[`${Livre}-${Chapitre}-${Verset}`]
            const isHighlighted = !!state.highlightedVerses[`${Livre}-${Chapitre}-${Verset}`]
            const highlightedColor = isHighlighted && state.highlightedVerses[`${Livre}-${Chapitre}-${Verset}`].color

            return (
              <Verse
                verse={verse}
                settings={state.settings}
                isSelected={isSelected}
                highlightedColor={highlightedColor}
              />
            )
          })
        }
      </Container>
    )
  }
}

export default VersesRenderer
