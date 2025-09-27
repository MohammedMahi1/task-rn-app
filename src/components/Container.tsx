import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'

type ContainerProps = {
    children: React.ReactNode
} & SafeAreaViewProps

const Container = ({children,...rest}:ContainerProps) => {
  return (
    <SafeAreaView {...rest} style={{flex:1,flexDirection:"row",backgroundColor:"#f0f0f0"}}>
        {children}
    </SafeAreaView>
  )
}

export default Container