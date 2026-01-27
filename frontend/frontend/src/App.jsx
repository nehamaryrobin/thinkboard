import {Route , Routes} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'

const App = () => { 
  return (
    <div>
      <button className='btn btn-outline'> Click </button>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<NoteDetailPage/>}/>
      </Routes>
  </div>
  );
};

export default App;