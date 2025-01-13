import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/header/Header'

function App() {
  const [bookmarkes,setBookmarkes] = useState([])

  const handleAddToBookmarkes = blog =>{
      const newBookmarks = [...bookmarkes,blog]
      setBookmarkes(newBookmarks) 
  }

  return (
    <>
      <Header></Header>
      <div className='w-4/6 mx-auto flex'>
        <Blogs handleAddToBookmarkes={handleAddToBookmarkes}></Blogs>
        <Bookmarkes bookmarkes={bookmarkes} handleAddToBookmarkes={handleAddToBookmarkes}></Bookmarkes>
      </div>
    </>
  )
}

export default App
