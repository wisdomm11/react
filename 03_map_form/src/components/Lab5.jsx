import React from 'react'

const Lab5 = () => {
    const fruitsName = ['사과', '바나나', '오렌지']
    const fruits = fruitsName.map(
        (fruit, index) => {
            return <li key = {index}>{fruit}</li>
        }
    )


  return (
    <div>
        <h1>Lab5 - map을 사용해서 출력하기 : 고유키를 생성해서 출력하기 </h1>
        <hr></hr>
        <ul>
            {fruits}
        </ul>


    </div>
  )
}

export default Lab5