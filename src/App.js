import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
        
        <BrowserRouter>
        <Header/>
        <Routes>    
          <Route path='/search/:searchTerm' element={
            <div className='app'>
             <Sidebar/>
             <SearchPage/>
          </div>
             }/>
            <Route path="/" element={  
            <div className='app'>
              <Sidebar/>
              <RecommendedVideos/>
            </div>}>
          
            </Route>
        </Routes>

        </BrowserRouter>
       
  
  );
}

export default App;
