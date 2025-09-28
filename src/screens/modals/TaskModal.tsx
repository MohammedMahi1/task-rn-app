import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Box from '../../components/ui/Box'
import { useAppSelector } from '../../hooks/state'

const TaskModal = () => {
    const {selectedDate,selectedDay} = useAppSelector(state=>state.date)
  return (
    <View style={{height:"100%",width:"100%",flexDirection:"column",justifyContent:"flex-end"}} >
        <Box style={{padding:24,backgroundColor:"white",height:"60%",width:"100%",borderTopLeftRadius:16,borderTopRightRadius:16,boxShadow:"0px -1px 60px -20px rgba(0,0,0,0.1)",elevation:5}}>
        <Text>{selectedDay}</Text>
        <Text>{selectedDate}</Text>
        </Box>
    </View >
  )
}

export default TaskModal