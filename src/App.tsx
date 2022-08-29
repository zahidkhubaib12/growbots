import react from 'react-dom'
import ForgetPassword from './components/molecules/forget/forgetPasswordmodule.';
import Login from './components/molecules/login/login';
import ChangePassword from './components/molecules/change/changePassword.module';
import SignUp from './components/molecules/signup/signup.module';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (<>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/change" element={<ChangePassword />}/> 
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
  }
export default App;
