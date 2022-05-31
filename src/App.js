import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Faq from './pages/Faq';

function App() {
  return (
    <body>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/FAQ" element={<Faq />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
