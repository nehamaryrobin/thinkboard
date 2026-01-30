import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx' 

const App = () => {
  return (
    <div data-theme="forest" className="min-h-screen bg-base-200 p-4">
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <button className="btn btn-outline">Another Button</button>
      <button onClick={() => { toast.success('This is a success message!') }} className='text-blue-500np'>Show Toast</button>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App