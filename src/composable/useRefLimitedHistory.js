import { watchEffect, toValue } from 'vue'
import { useRefHistory } from './useRefHistory'

export function useRefLimitedHistory(source, capacity) {
  const { history, undo } = useRefHistory(source)
  watchEffect(() => {
    // capacityの値は、refでもrefオブジェクトでも対応できるように、toValueを使用する
    if (history.value.length > toValue(capacity)) {
      history.value.shift()
      console.log(history.value)
    }
  })
  return {
    history,
    undo,
  }
}
