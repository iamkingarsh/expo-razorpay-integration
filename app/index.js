import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import Input from '../components/input'
import Button from '../components/button'

const home = () => {

  const [amount, setAmount] = useState(0);
  const [balace, setBalance] = useState(0);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        height: '100%',
      }}
      
      >
      <Text
        style={{
          fontSize: SIZES.base,
          padding: SIZES.base,
          fontFamily: FONTS.medium,
          color: COLORS.lightGray4,
        }}
      >
        Current Balance: 
         { new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
        }).format(balace)
        }
      </Text>
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
            <Input value={
              amount
            } onChangeText={(text) => setAmount(text)} placeholder="0" variant="numeric" />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >

        <Button
          onPress={() => { }}
          style={{
            backgroundColor: COLORS.primary,

          }}

          title='Pay' />
      </View>

    </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

export default home