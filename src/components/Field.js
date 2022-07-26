import React from 'react'

import {Field} from './styles'

export default ({
  mined,
  opened,
  nearMines
}) => {
  
  const styled_class=['default']

  if (opened) styled_class.push('opened')
  if (styled_class.length==1) styled_class.push('regular')

  return (
    <Field regular={styled_class.some(it=>it=='regular')}>
    </Field>
  )
}