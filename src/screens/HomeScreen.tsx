import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { FlatList, View, Text, StyleSheet, Button } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NavigationHome } from '../types/types'
import { fetchLifts } from '../store/liftSlice'

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const lifts = useSelector((state: RootState) => state.lifts.lifts)
  const navigation = useNavigation<NavigationHome>()

  useEffect(() => {
    dispatch(fetchLifts())
  }, [dispatch])

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchLifts())
    }, [dispatch])
  )

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="+" onPress={() => navigation.navigate('AddLift')} />
      ),
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Лифты</Text>
      <FlatList
        data={lifts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.date}>{item.lastCheck}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Нет лифтов</Text>}
      />
    </View>
  )
}

export { HomeScreen }

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 50, marginBottom: 15 },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  address: { fontSize: 16, fontWeight: '500' },
  date: { fontSize: 14, color: '#666', marginTop: 4 },
})



