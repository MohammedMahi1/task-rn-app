import { View, Text } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import Box from '../components/ui/Box'
import { DatePicker, DateTitle } from '../components/contents/DatePicker'
import Tasks from '../components/contents/Tasks'

const Main = () => {
  return (
    <Container>
      <Box>
        <Box.Header>
          <DateTitle/>
        </Box.Header>
        <Box.Body>
          <DatePicker/>
        </Box.Body>
          <Tasks/>
        
      </Box>
    </Container>
  )
}

export default Main