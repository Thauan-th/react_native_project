import React from 'react'
import { Text } from 'react-native'
import {Field,Lb} from './styles'
import NearMinesColor from './utils'
import Mine from '../Mine/Mine'
import Flag from '../Flag/Flag'

export default ({
  mined,
  opened,
  nearMines,
  exploded,
  flagged
}) => {
  
  const styled_class=['default']

  if (opened) styled_class.push('opened')
  if(exploded) styled_class.push('exploded')
  if(flagged) styled_class.push('flagged','regular')
  if (!opened && !exploded) styled_class.push('regular')

  let color = NearMinesColor(nearMines)

  return (
    <Field opened={opened} nearMines={nearMines} regular={styled_class.at(-1)==='regular'} exploded={styled_class.at(-1)==='exploded'}>
      {!mined && opened && nearMines && <Lb color={color}>{nearMines}</Lb>}
      { mined && opened &&  <Mine/>}
      {flagged && !opened && <Flag/>}
    </Field>
  )
}