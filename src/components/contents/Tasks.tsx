import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../hooks/state'

const Tasks = () => {
    const tasks = useAppSelector(state=>state.task.tasks)
    return(
        tasks.length >= 0 ? (
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>

                <Text style={{fontSize:24,fontWeight:"bold",color:"gray"}}>No Tasks</Text>
            </View>
        ):(
            <View >
                <Text>Tasks</Text>
                </View>
        )

    )
}

export default Tasks