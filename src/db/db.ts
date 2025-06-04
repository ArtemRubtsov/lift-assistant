import AsyncStorage from '@react-native-async-storage/async-storage'
import { Lifts } from '../types/types'

const LIFTS_KEY = 'lifts'

export const fetchLiftsFromStorage = async (): Promise<Lifts[]> => {
  try {
    const json = await AsyncStorage.getItem(LIFTS_KEY)
    return json ? JSON.parse(json) : []
  } catch (error) {
    console.log('Ошибка чтения лифтов из хранилища', error)
    return []
  }
}

export const addLiftToStorage = async (lift: Lifts): Promise<void> => {
  try {
    const lifts = await fetchLiftsFromStorage()
    lifts.push(lift)
    await AsyncStorage.setItem(LIFTS_KEY, JSON.stringify(lifts))
  } catch (error) {
    console.log('Ошибка записи лифта в хранилище', error)
  }
}



