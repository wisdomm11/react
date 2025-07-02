import Lab1 from "./components/Lab1"
import Lab2 from "./components/Lab2"
import Lab3 from "./components/Lab3"
import Lab4 from "./components/Lab4"
import Lab5 from "./components/Lab5"
import Lab6 from "./components/Lab6"
import Movie from "./components/Movie"
import { dumy } from "./Dumy"
import "./App.css"
import Register from "./components/Register"

function App() {

  return (
    <>
        <Lab1/>
        <Lab2/>
        <Lab3/>
        <Lab4/>
        <Lab5/>
        <Lab6/>


        <div className="app-container">
          {
            dumy.results.map(
              (item) => {
                return <Movie 
                title={item.title}
                
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                >                
                </Movie>
              }
            )
          } 
        </div>

        <Register></Register>
        
        
    </>
  )
}

export default App
