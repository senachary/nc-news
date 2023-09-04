import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'

function App() {

  return (
      <div className='App'>
        <Header />
        <Routes>
        <Route path='/' element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<SingleArticle/>} />
        </Routes>
      </div>
  )
}

export default App
