import React from 'react'

const Lab2 = () => {
    // 태그를 배열에 넣고 배열을 출력하기
    const fruits = [<li>apple</li>, <li>banana</li>, <li>orange</li>]

  return (
    <div>
        <h1>Lab2 - 배열에 엘리먼트를 넣어서 출력</h1>
        <hr></hr>
        <ul>
            {fruits}
        </ul>

    </div>
  )
}

export default Lab2