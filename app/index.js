import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import {COLORS, FONTS} from '../constants/theme'
import Input from '../components/input'

const home = () => {
  const [textValue, setTextValue] = useState('0');
  return (
    <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      height: '100%',
    }}
    >
      <Stack.Screen 
        options={{
          headerTitle: 'Reacharge Your Wallet',
        
        }}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: FONTS.medium,
            color: COLORS.primary,
          }}
        >Enter Amount</Text>
        <View
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
            }}
          >
            <Text
              style={{
                fontSize: 50,
                fontFamily: FONTS.bold,
                color: COLORS.primary,
              }}
            >₹</Text>
          <Input  value={textValue}  onChangeText={(text) => setTextValue(text)} placeholder="0" variant="numeric" />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default home