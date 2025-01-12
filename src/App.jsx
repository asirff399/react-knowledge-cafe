import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='w-4/6 mx-auto flex'>
        <Blogs></Blogs>
        <Bookmarkes></Bookmarkes>
      </div>
    </>
  )
}

export default App
