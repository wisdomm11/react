import React, { useState } from 'react'


// 간단한 회원 가입 폼 태그 // 기본 작동

// 이름 // 인풋 타입 텍스트
// 생년월일 // 인풋 타입 데이트
// 국적 // 셀렉트 옵션 
// 자기소개 // 텍스트 에어리어

const Register2 = () => {
    // const [name, setName] = useState("");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    // 인풋 객체
    // 값들을 객체로 처리하는것
    const [input, setInput] = useState(
        {
            name : "",
            birth : "",
            country : "",
            bio : ""
        }
    )

    // e // 이벤트 받는것
    const onChange = (e) => {

        setInput(
            {
                ...input, // 기존 객체 필드 값을 유지하는것
                [e.target.name] : e.target.value, 
            }
        )
    }
    


  return (
    <div>
        <h1>간단한 회원 가입 폼 처리2</h1>
        <hr></hr>
        <div>
            <input
                name = "name"
                value={input.name}
                placeholder='이름을 입력하세요'
                onChange={onChange}
            >
            </input>
        </div>
        <div>
            <input
                name = "birth"
                value={input.birth}
                type = "date"
                onChange={onChange}
                
            >
            </input>
        </div>
        <div>
            <select name="country" id="" onChange={onChange} value={input.country}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>
        <div>
            <textarea name="bio" value={input.bio} onChange={onChange}>

            </textarea>
        </div>
    </div>
  )
}

export default Register2