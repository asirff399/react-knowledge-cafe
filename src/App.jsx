import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/header/Header'

function App() {
  const [bookmarkes,setBookmarkes] = useState([])
  const [readingtime,setReadingtime] = useState(0)

  const handleAddToBookmarkes = blog =>{
      const newBookmarks = [...bookmarkes,blog]
      setBookmarkes(newBookmarks) 
  }
  const handleMarkedAsRead = (time) =>{
      const newReadingTime = readingtime + time;
      setReadingtime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='w-4/6 mx-auto flex'>
        <Blogs handleAddToBookmarkes={handleAddToBookmarkes} handleMarkedAsRead={handleMarkedAsRead}></Blogs>
        <Bookmarkes bookmarkes={bookmarkes} handleAddToBookmarkes={handleAddToBookmarkes} readingtime={readingtime}></Bookmarkes>
      </div>
    </>
  )
}

export default App
