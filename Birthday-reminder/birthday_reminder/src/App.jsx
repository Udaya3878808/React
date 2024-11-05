
import { useState } from 'react'
import './App.css'
import List from './components/List'
import data from "./data"
function App() {
  const [people,setPeople] = useState(data)
  return(
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])
        }>Clear All</button>
      </section>
    </main>
  )
}

export default App
