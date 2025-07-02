import React from 'react'

import "./Main.css"; 

// JSX 주의 사항 
/*
  1. 최상위 태그(엘리먼트)는 반시 하나로 묶여 져야 한다.
  2. 중괄호 내부는 자바스크립트 표현 식만 가능하다. 
  3. 숫자, 문자열, 배열 값만 랜더링 됨 
  4. 반드시 모든 태그는 닫혀 져야 한다. 
  5. 리턴(return) 소괄호로 처리되어야 되고 생략 해도 된다. 
  6. 리텀(return) 에 들어가는 코드가 JSX, Body에 출력되는 블락이다.  
  7. jsx 블락에서는 if, for 구문을 사용 할 수 없다. 삼항연산자나 && 연산자를 사용해서 처리 
  8. 클래스 이름을 부여 할때 : class = "이름" (HTML) , className = "이름" (JSX)
  9. 인라인 스타일을 적용시 : style={{ 스타일 적용 }}
*/

const Main = () => {
  // 자바스크립트 변수 선언, State, 
  const user = {
    name: "홍길동", 
    age : 30 , 
    isLogin : false,
  }; 

  return (
    <>
      <div>Main</div>
      {user.isLogin ? (<div className= "logout">로그아웃</div>) : (<div id="login">로그인</div>)} 
      <hr />
      <br /> 
      <div><span style={{backgroundColor:'red',borderBottom:'5px solid blue'}}> 이름 : </span> {user.name}</div>
      <div><span> 나이 : </span> {user.age}</div>
      <hr /> 
      <br /> 
   </>
  )
}

export default Main