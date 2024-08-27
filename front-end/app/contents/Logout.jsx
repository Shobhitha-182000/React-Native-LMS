import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Logout() {
    const navigate=useNavigation()
  return (
    <View>
     <Button onPress={()=>navigate.navigate('MainPage')} title='Logout'/>
    </View>
  )
}