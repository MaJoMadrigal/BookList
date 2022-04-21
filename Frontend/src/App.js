import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import SmallCard from './Components/Card/Card'
import Mode from './Components/Mode/Mode'
import { useSelector } from 'react-redux'

const App = () => {
  const mode = useSelector((state) => state.bookStore.mode)
  return (
    <section>
      <NavBar></NavBar>
      {mode && <Mode />}
      <SmallCard></SmallCard>
    </section>
  )
}

export default App
