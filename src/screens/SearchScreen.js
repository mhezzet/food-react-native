import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useSearch from '../hooks/useSearch'
import RestaurantList from '../components/RestaurantList'

const SearchScreen = () => {
  const { errorMessage, loading, restaurants, searchFood } = useSearch()
  const [groupedRestaurant, setGroupedRestaurant] = useState({})

  useEffect(() => {
    const grouped = restaurants.reduce(
      (grouped, restaurant) => ({
        ...grouped,
        ...(grouped[restaurant.price]
          ? { [restaurant.price]: [...grouped[restaurant.price], restaurant] }
          : { [restaurant.price]: [restaurant] })
      }),
      {}
    )
    setGroupedRestaurant(grouped)
  }, [restaurants])

  return (
    <>
      <SearchBar onSubmit={searchFood} />
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
        <ScrollView>
          <RestaurantList
            restaurants={groupedRestaurant['$'] || []}
            title='Cost Effective'
          />
          <RestaurantList
            restaurants={groupedRestaurant['$$'] || []}
            title='Bit Pricier'
          />
          <RestaurantList
            restaurants={groupedRestaurant['$$$'] || []}
            title='Big Spender'
          />
        </ScrollView>
      )}
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
