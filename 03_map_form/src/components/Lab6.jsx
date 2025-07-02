import React from 'react'

const Lab6 = () => {
    const fruitsName = ['사과', '바나나', '오렌지']

  return (
    <div>
        <h1>lab6 - jsx 블록에서 map 사용</h1>
        <hr></hr>
        <ul>
            {
            fruitsName.map(
                (fruit, index) => {
                return <li key={index}>{fruit}</li>
            }
        )
            }
        </ul>

    </div>
  )
}

export default Lab6