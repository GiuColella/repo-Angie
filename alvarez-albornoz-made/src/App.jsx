import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Grid from './components/grid/Grid'
import Login from './components/login-register/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Grid /> } />
        <Route path="/login" element={ <Login /> }/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
