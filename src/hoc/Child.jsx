import React from 'react'
import Hoc from './Hoc'

const Child = ({value}) => {
    document.write(value)
  return (
    <div>Child</div>
  )
}

export default Hoc(Child);