import React, { useState } from 'react'
import App from '../App';

const Register = () => {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    
    // 함수 선언식
    function onChangeName(e) {
        
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

    const onchangeId = (e) => {
        setId(e.target.value);

    }

    const onchangePassword = (e) => {
        setPassword(e.target.value);

    }

    const onchangeAddress = (e) => {
        setAddress(e.target.value);

    }

    const onchangeIntroduction = (e) => {
        setIntroduction(e.target.value);

    }

    const onchangePhone = (e) => {
        setPhone(e.target.value);

    }

    const onchangeEmail = (e) => {
        setEmail(e.target.value);

    }

  return (
    <div className='register'>
        
        <div>
            
            <div>이름</div>
            <input
                
                value={name}
                placeholder='이름을 입력하세요'
                onChange={onChangeName}
            >
            </input>
        </div>

        <div>
            
            <div>아이디</div>
            <input
                
                value={id}
                placeholder='아이디를 입력하세요'
                onChange={onchangeId}
            >
            </input>
        </div>

        <div>
            
            <div>비밀번호</div>
            <input
                
                value={password}
                placeholder='비밀번호를 입력하세요'
                onChange={onchangePassword}
            >
            </input>
        </div>

        <div>
            
            <div>주소</div>
            <input
                
                value={address}
                placeholder='주소를 입력하세요'
                onChange={onchangeAddress}
            >
            </input>
        </div>

        <div>
            <div>자기소개</div>
            <textarea value={introduction} onChange={onchangeIntroduction}>

            </textarea>
        </div>

        <div>
            <div>생일</div>
            <input
                value={birth}
                type = "date"
                onChange={onChangeBirth}
                
            >
            </input>
        </div>

        <div>
            
            <div>전화번호</div>
            <input
                
                value={phone}
                placeholder='010-0000-0000'
                onChange={onchangePhone}
            >
            </input>
        </div>

        <div>
            
            <div>이메일</div>
            <input
                
                value={email}
                onChange={onchangeEmail}
            >
            </input>
        </div>

        













        <hr />




        
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