import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
import Post from './components/Post/Post'
import Suggestions from './components/Suggestions/Suggestions';


function App() {

  return (
    <>
    < Header />
    < Profile />
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-3">
        < Sidebar />
        </div>
        <div className="col-md-6">
          < Post />
        </div>
        <div className="col-md-3">
         < Suggestions />
        </div>
      </div>
      </div>
    
    </>
  )
}

export default App
