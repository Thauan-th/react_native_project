import React from 'react'

import {Field} from './styles'

export default () => {
  const styled_class=['default']

  if (styled_class.length==1) styled_class.push('regular')

  return (
    <Field regular={styled_class.some(it=>it=='regular')}>
    </Field>
  )
}