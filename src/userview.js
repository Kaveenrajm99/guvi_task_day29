import React from 'react'
import { useParams } from 'react-router-dom'

const Userview = () => {
    let params= useParams()
  return (
      <div>Userview {params.id }</div>
  )
}

export default Userview