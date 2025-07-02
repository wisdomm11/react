
// rafce : 화살표 함수형 컴포넌트 자동 코드 생성 
/*
    Props : 컴포넌트 사이로 데이타를 전송 
        1. 단방향 이다. 부모 컴포턴트에서 자식 컴포넌트로 전송 ( 자식=> 부모 (x) )
        2. 자식컴포넌트는 읽기 전용이다. 
        3. 컴포넌트의 재사용성을 높인다. 

*/ 

// 부모에서 내려주는 값(필드:값)을 props 가 받는다. 
const Button = (props) => {
    console.log(props)


  return (
    <div>
        <button> {props.text} 버튼 </button>

    </div>
  )
}

export default Button