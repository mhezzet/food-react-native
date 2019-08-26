import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import useRestaurant from '../hooks/useRestaurant'

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { restaurant, loading, errorMessage } = useRestaurant(id)

  console.log(restaurant)

  return (
    <>
      {loading && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}
        >
          <Text>loading ...</Text>
        </View>
      )}
      {!!errorMessage && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}
        >
          <Text>{errorMessage}</Text>
        </View>
      )}
      {!loading && !!!errorMessage && (
        <>
          <Text style={styles.title}>{restaurant.name}</Text>
          <FlatList
            data={restaurant.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
          />
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10
  }
})

export default RestaurantScreen
