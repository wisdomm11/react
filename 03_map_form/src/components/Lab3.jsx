import React from 'react'

const Lab3 = () => {
    const fruitsName = ['사과', '바나나', '오렌지']
    const fruits = []


    for (let i = 0; i<fruitsName.length; i++) {
        fruits.push(<li>{fruitsName[i]}</li>)
    }





  return (
    <div>
        <h1> Lab3 - for문을 사용해서 출력하기 </h1>
        <hr/>
        <ul>
            {fruits}
        </ul>

    </div>
  )
}

export default Lab3