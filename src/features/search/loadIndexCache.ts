import * as FileSystem from 'expo-file-system'

let loadedIndex: Object | null = null

const loadIndexCache = (idxFile: FileSystem.FileInfo) =>
  new Promise(async resolve => {
    if (loadedIndex) {
      return resolve(loadedIndex)
    }

    const data = await FileSystem.readAsStringAsync(idxFile.uri)

    const lunr = require('lunr')
    require('~helpers/lunr.stemmer.support.min.js')(lunr)
    require('~helpers/lunr.fr.min.js')(lunr)
    require('~helpers/lunr.unicodeNormalizer')(lunr)

    loadedIndex = lunr.Index.load(JSON.parse(data))
    resolve(loadedIndex)
  })

export default loadIndexCache
