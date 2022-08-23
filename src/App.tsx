import react from 'react-dom'
import ForgetPassword from './components/molecules/forget/forgetPassword';
import Login from './components/molecules/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (<>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
  }
export default App;
