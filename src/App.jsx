import NavBar from './contents/NavBar/NavBar'
import ItemListContainer from './contents/ItemListContainer/ItemListContainer'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting = {"Greetings: with React!"} />
    </>
  )
}

export default App
