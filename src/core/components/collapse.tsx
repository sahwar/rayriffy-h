import React, { useState } from 'react'

import { Collapse } from 'react-collapse'

import { Box, Text } from 'rebass'

import { ICollapseProps } from '../@types/ICollapseProps'

const CollapseComponent: React.FC<ICollapseProps> = props => {
  const {defaultState = false, title, children} = props

  const [isShow, setIsShow] = useState(defaultState)

  return (
    <Box>
      <Box p={1}>
        <Text fontSize={14} onClick={() => setIsShow(prev => !prev)}>{title}</Text>
      </Box>
      <Collapse isOpened={isShow}>
        <Box p={2}>
          {children}
        </Box>
      </Collapse>
    </Box>
  )
}

export default CollapseComponent