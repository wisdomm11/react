import React from 'react'
import { useSearchParams } from 'react-router-dom'

// 로컬호스트:3000/edit2?id=200&mode=abc
const Edit2 = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    
    const id = searchParams.get("id");
    const mode = searchParams.get("mode");

    console.log(id);
    console.log(mode);
  return (
    <div>
        <h1>에딧 페이지 쿼리 스트링</h1>
        <p>유즈 서치 파람스에서 불러온 값</p>
        <h1>{id}</h1>
        <h1>{mode}</h1>
    </div>
  )
}

export default Edit2