// import logo from './logo.svg';
import './App.css';
import { LoginForm, RegistrationForm } from './componants/from';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './componants/protectedroutes';
import UserHome from './componants/home';
import UpdatePassword from './componants/updatepassword';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegistrationForm/>}/>
            {/* <Route element={<ProtectedRoutes/>}/>
              <Route path='/' element={<UserHome/>}/>
              <Route path='/changepass' element={<UpdatePassword/>}/>
            <Route/> */}

              <Route path='/dashboard' element={<ProtectedRoutes Component = {UserHome}/>}/>
            {/* <Route path='/changepass' element={<UpdatePassword/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
