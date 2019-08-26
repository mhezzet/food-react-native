import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const RestaurantListItem = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating}⭐ ({restaurant.review_count}) reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  container: {
    marginLeft: 15
  }
})

export default RestaurantListItem
