import { strongDB } from '~helpers/database'

const SQLTransaction = sqlReq => {
  return new Promise((resolve, reject) => {
    strongDB.get().transaction(
      tx => {
        tx.executeSql(
          sqlReq,
          [],
          (_, { rows: { _array } }) => {
            resolve(_array)
          },
          (txObj, error) => reject(error)
        )
      },
      error => reject(error)
    )
  })
}

export default SQLTransaction
