import react from 'react-dom'
import ForgetPassword from './components/molecules/forget/forgetPassword';
import Login from './components/molecules/login/login';
import ChangePassword from './components/molecules/change/changePassword';
import SignUp from './components/molecules/signup/signup';
import Resetpassword from './components/molecules/reset/resetpassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './components/pages/home/dashboard';


function App() {
  return (<>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/change" element={<ChangePassword />}/> 
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/reset" element={<Resetpassword />}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
  }
export default App;
