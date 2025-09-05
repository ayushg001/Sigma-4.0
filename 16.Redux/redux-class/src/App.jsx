import Todos from './components/Todos';
import './App.css'
import {Provider } from "react-redux";
import { store } from './app/store';


function App() {


  return (
    <>
    <Provider store={store}>
     <Todos/>
    
     </Provider>
    </>
  )
}

export default App
