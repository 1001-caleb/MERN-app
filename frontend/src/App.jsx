import './App.css'
import ShowBlogs from './blog/ShowBlogs'
import CreateBlogs from './blog/CreateBlogs'
import EditBlogs from './blog/EditBlogs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowBlogs/> }/>
          <Route path='/create' element={ <CreateBlogs/> }/>
          <Route path='/edit/:id' element={ <EditBlogs/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
