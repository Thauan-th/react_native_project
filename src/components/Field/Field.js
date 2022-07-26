import React from 'react'
import { Text } from 'react-native'
import {Field,Lb} from './styles'
import NearMinesColor from './utils'

export default ({
  mined,
  opened,
  nearMines
}) => {
  
  const styled_class=['default']

  if (opened) styled_class.push('opened')
  if (styled_class.length==1) styled_class.push('regular')

  let color = NearMinesColor(nearMines)

  return (
    <Field opened={opened} nearMines={nearMines} regular={styled_class.some(item=>item=='regular')}>
      {!mined && opened && nearMines && <Lb color={color}>{nearMines}</Lb>}
    </Field>
  )
}