import React from 'react'

const Lab4 = () => {
    const fruitsName = ['사과', '바나나', '오렌지']

    const fruits = fruitsName.map(
        (fruit) => {
            return <li>{fruit}</li>
        }
    );

  return (
    <div>
        <h1> Lab4 - map() 함수를 이용해서 처리 </h1>
        <hr></hr>
        <ul>
            {fruits}
        </ul>


    </div>
  )
}

export default Lab4