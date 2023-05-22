import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/postDetails' element={<PostDetails/>}/>

            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
