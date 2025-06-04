import { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationAddLift } from '../types/types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { addLift } from '../store/liftSlice'
import { nanoid } from '@reduxjs/toolkit'


const AddLiftScreen = () => {
  const [address, setAddress] = useState('')
  const [lastCheck, setLastCheck] = useState('')
  const navigation = useNavigation<NavigationAddLift>()
  const dispatch = useDispatch<AppDispatch>()

  const handleSave = () => {
    if (!address.trim() || !lastCheck.trim()) {
      Alert.alert('Ошибка', 'Заполни все поля')
      return
    }
    try {
      const newLift = {
        id: nanoid(),
        address,
        lastCheck,
      }
      dispatch(addLift(newLift))
      Alert.alert('Добавлено', `Адрес: ${address}, Проверка: ${lastCheck}`)
      navigation.goBack()
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось добавить лифт')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Адрес лифта:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="ул. Леси Украинки, 12"
      />
      <Text style={styles.label}>Дата последней проверки:</Text>
      <TextInput
        style={styles.input}
        value={lastCheck}
        onChangeText={setLastCheck}
        placeholder="2025-06-03"
      />
      <Button title="Сохранить" onPress={handleSave} />
    </View>
  )
}

export { AddLiftScreen }

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  label: { fontSize: 16, marginTop: 15, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 },
})



