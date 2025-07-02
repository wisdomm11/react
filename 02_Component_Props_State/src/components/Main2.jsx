import React from 'react'


const Main2 = () => {
// 자바스크립트 변수 선언, State, 
  const user = {
    name: "홍길동", 
    age : 30 , 
    isLogin : true,
  }; 

  if (user.isLogin) {
    // jsx를 리턴으로 처리함. 
    return (<div>로그 아웃</div>)
  }else {
    // jsx를 리턴으로 처리함. 
    return <div> 로그인 </div>
  }

  
}

export default Main2