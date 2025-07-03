import { Link } from "react-router-dom"
import Router from "./route/Router"
import { useNavigate } from "react-router-dom"

function App() {
  // 유즈 내비게이트
  const navigate = useNavigate();

  return (
    <>
        <h1>리액트 라우터</h1>
        <hr></hr>
        <nav>
          <ul>
            
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/gallery">갤러리</Link></li>
            <li><Link to="/footer">Footer</Link></li>
            <li><Link to="/edit/100">에딧 : 패스 배리어블 예제</Link></li>
            <li><Link to="/edit2?id=200&mode=abc">에딧2 : 쿼리 스트링 예제</Link></li>

            <li>=============useNavigate() 훅 사용=============</li>
            <li><button onClick={() => {navigate("/")}}>홈으로 이동</button></li>
            <li><button onClick={() => {navigate("/about")}}>어바웃으로 이동</button></li>
            <li><button onClick={() => {navigate("/gallery")}}>갤러리로 이동</button></li>
            
          </ul>
        </nav>

        <Router></Router>

        
    </>
  )
}

export default App
