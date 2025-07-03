import React from 'react'
import { useParams } from 'react-router-dom'

// localhost:3000/edit/100
const Edit = () => {
    const {id} = useParams();
  return (
    
    <div>
        <h1>에딧 페이지 패스 배리어블</h1>
        <p>useParams()에서 불러온 값</p>
        <h1>{id}</h1>
    </div>
  )
}

export default Edit