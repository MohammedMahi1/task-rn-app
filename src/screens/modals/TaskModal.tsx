import { View, Text, Touchable, TouchableWithoutFeedback, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Box from '../../components/ui/Box'
import { useAppSelector } from '../../hooks/state'
import { useNavigation } from '@react-navigation/native'

const TaskModal = () => {
    const {selectedDate,selectedDay} = useAppSelector(state=>state.date)
    const navigate = useNavigation()
  return (
    <Pressable style={{flex:1,width:"100%",flexDirection:"column",justifyContent:"flex-end",backgroundColor:"red",zIndex:99,position:"relative"}} onPress={()=>navigate.goBack()}>
        <Box pointerEvents='none' style={{padding:24,backgroundColor:"white",height:"60%",width:"100%",borderTopLeftRadius:16,position:"absolute",zIndex:0,borderTopRightRadius:16,boxShadow:"0px -1px 60px -20px rgba(0,0,0,0.1)",elevation:5}}>
        <Text>{selectedDay}</Text>
        <Text>{selectedDate}</Text>
        </Box>
    </Pressable >
  )
}

export default TaskModal