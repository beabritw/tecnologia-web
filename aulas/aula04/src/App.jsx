import { useContext } from 'react';
import './App.css'
import Login from './pages/Login';
import { NavegaContext } from './contents/NavegaContext';

function App() {
  const {rota} = useContext(NavegaContext);

  if (rota == '/login'){
    return <Login/>;
  }
  else if (rota == "/home"){
    return <Home/>
  }
  else {
    return <Perfil/>
  }
}

export default App
