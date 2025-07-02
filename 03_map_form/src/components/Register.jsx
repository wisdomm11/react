import React, { useState } from 'react'


// 간단한 회원 가입 폼 태그 // 기본 작동

// 이름 // 인풋 타입 텍스트
// 생년월일 // 인풋 타입 데이트
// 국적 // 셀렉트 옵션 
// 자기소개 // 텍스트 에어리어

const Register = () => {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");
    
    // 함수 선언식
    function onChangeName(e) {
        // console.log("이름 호출됨");
        // console.log(e);
        setName(e.target.value);

    };

    // 함수 표현식
    const onChangeBirth = function (e) {
        setBirth(e.target.value);
    }

    // 화살표 함수
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onchangeBio = (e) => {
        setBio(e.target.value);

    }

  return (
    <div>
        <h1>간단한 회원 가입 폼 처리</h1>
        <hr></hr>
        <div>
            <input
                
                value={name}
                placeholder='이름을 입력하세요'
                onChange={onChangeName}
            >
            </input>
        </div>
        <div>
            <input
                value={birth}
                type = "date"
                onChange={onChangeBirth}
                
            >
            </input>
        </div>
        <div>
            <select name="" id="" onChange={onChangeCountry} value={country}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>
        <div>
            <textarea value={bio} onChange={onchangeBio}>

            </textarea>
        </div>
    </div>
  )
}

export default Register