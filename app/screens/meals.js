import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Meals = () => {
  return (
    <View style = {styles.container}>
      <Text>meals</Text>
    </View>
  )
}

export default Meals;

const styles = StyleSheet.create({
container:{
  alignItems:"center",
  justifyContent:"center"
}
})