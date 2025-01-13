import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/header/Header'

function App() {
  const [bookmarkes,setBookmarkes] = useState([])

  const handleAddToBookmarkes = blog =>{
      console.log("bookmark adding soon")
  }

  return (
    <>
      <Header></Header>
      <div className='w-4/6 mx-auto flex'>
        <Blogs handleAddToBookmarkes={handleAddToBookmarkes}></Blogs>
        <Bookmarkes handleAddToBookmarkes={handleAddToBookmarkes}></Bookmarkes>
      </div>
    </>
  )
}

export default App
