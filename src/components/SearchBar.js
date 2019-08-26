import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name='search' />
      <TextInput
        style={styles.input}
        placeholder='Search for food or restaurants'
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={e => onSubmit(e.nativeEvent.text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 8
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 13
  }
})

export default SearchBar
