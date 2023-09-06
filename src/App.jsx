import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'
import CommentsList from './components/CommentsList'
import TopicsList from './components/TopicsList'

function App() {

  return (
      <div className='App'>
      <Header />
      <Navbar />
        <Routes>
        <Route path='/' element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/articles/:article_id/comments' element={<CommentsList />} />
        <Route path='/topics' element={<TopicsList />} />
        </Routes>
      </div>
  )
}

export default App
