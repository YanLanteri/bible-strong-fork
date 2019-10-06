import { Platform } from 'react-native'
import colors from './darkColors'

export default {
  colors,
  measures: {
    headerHeight: 50,
    headerMarginTop: Platform.OS === 'ios' ? 0 : 25,
    maxWidth: 320
  },
  fontFamily: {
    text: Platform.OS === 'ios' ? 'System' : 'normal',
    title: 'eina-03-bold',
    titleItalic: Platform.OS === 'ios' ? 'System' : 'normal'
  }
}
